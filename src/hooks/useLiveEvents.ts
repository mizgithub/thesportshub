import { useState, useEffect, useCallback } from "react";
import type { EventResponse, Event } from "../types/index";

const API_URL = "https://www.thesportsdb.com/api/v1/json/3/eventsnext.php?id=133602";


const useLiveEvents = () =>{
    const [events,setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string|null>(null);

    const fetchEvents = useCallback(async()=>{
        try{
            if(events.length === 0)
                setLoading(true);
            const response = await fetch(API_URL);
            if (!response.ok){
                throw new Error(`Error occured while fetching live events. Please make Sure your connection is stable and try again.Status${response.status}`);

            }
            const data:EventResponse = await response.json();

            if(data.events){
                setEvents(data.events);
            }
            else{
                setEvents([]);
            }

        }
        catch(err){
            console.log(err);
            setError('Error occured while fetching live events. Please make Sure your connection is stable and try again');
        }
        finally{
            setLoading(false);
        }
    }, [events.length]);


    useEffect(()=>{
        fetchEvents();
        const intervalId = setInterval(fetchEvents, 20000);
        return ()=>clearInterval(intervalId);
    },[fetchEvents]);

    return {events, loading, error}

};
export default useLiveEvents;
