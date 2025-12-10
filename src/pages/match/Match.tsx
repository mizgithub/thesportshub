import MatchList from "./components/match-list/MatchList";
import useLiveEvents from "../../hooks/useLiveEvents";
const Match = ()=>{
    const list = [1,2,3];
    const {events, loading, error} = useLiveEvents();
    console.log(events);
    return (
        <div>
            Matches
            calendar

            events
            {loading}
            {error}
            {
                list?.map(l=>(
                    <MatchList key={l}/>
                ))
            }
        </div>
    );
}
export default Match;