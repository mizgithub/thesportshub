import { useState, useEffect, useCallback } from "react";
import type { Event} from "../types/index";
import { EventRearrangement } from "./FixstureDataArrangement";
const API_URL = "https://www.thesportsdb.com/api/v1/json/3/eventsnext.php?id=133602";
const useLiveEvents = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);



    const fetchEvents = useCallback(async () => {
        try {
            if (events.length === 0)
                setLoading(true);
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`Error occured while fetching live events. Please make Sure your connection is stable and try again.Status${response.status}`);

            }
            const data = await response.json();

            if (data) {
             
                //rearrangement
                const eventsArranged: Event[] = EventRearrangement({rawEvents:data?.events})??[]
                setEvents([]);
                setEvents(eventsArranged);
            }
            else {
                setEvents([]);
            }

        }
        catch (err) {
            console.log(err);
            setError('Error occured while fetching live events. Please make Sure your connection is stable and try again');
        }
        finally {
            setLoading(false);
        }
    }, [events.length]);


    useEffect(() => {
        fetchEvents();
        const intervalId = setInterval(fetchEvents, 20000);
        return () => clearInterval(intervalId);
    }, []);

    return { events, loading, error }

};
export default useLiveEvents;
