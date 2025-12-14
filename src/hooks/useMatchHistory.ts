import { useState, useEffect, useCallback } from "react";
import type {MatchDetail, Event} from "../types/index";
// import MatchRearrangement from "./MatchDataArrangement";
import { EventRearrangement } from "./FixstureDataArrangement";
import { generateMatchHistory } from "./CreateRandomGameHistory";
// const API_URL = "https://www.thesportsdb.com/api/v1/json/3/lookupevent.php";
const API_URL = "https://www.thesportsdb.com/api/v1/json/3/eventsnext.php?id=133602";


interface propType{
    id:string|null;
    time:string|null;
}

const useMatchHistory = ({id, time}:propType) => {
    const [events, setEvents] = useState<MatchDetail | null>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);



    const fetchEvents = useCallback(async () => {
        try {
            if (events == null)
                setLoading(true);
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`Error occured while fetching live events. Please make Sure your connection is stable and try again.Status${response.status}`);

            }
            const data = await response.json();

            if (data) {
                console.log(data);
                // const firstEvent:RawEvent = data.events[0];
                // console.log(firstEvent);
                const eventsArranged: Event[] = EventRearrangement({rawEvents:data.events, time:time});
                const randomGameHistory = generateMatchHistory(eventsArranged? eventsArranged[0]?.eventDetail[0]?.liveTime:"");
                
                setEvents({
                    eventDetail:eventsArranged[0].eventDetail[0],
                    history:randomGameHistory
                });
                // setEvents(eventsArranged);
                
            }
            else {
                setEvents(null);
            }

        }
        catch (err) {
            console.log(err);
            setError('Error occured while fetching live events. Please make Sure your connection is stable and try again');
        }
        finally {
            setLoading(false);
        }
    }, [events]);


    useEffect(() => {
        fetchEvents();
        
    }, [time]);

    return { events, loading, error }

};
export default useMatchHistory;
