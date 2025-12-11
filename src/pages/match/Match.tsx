import MatchList from "./components/MatchList";
import useLiveEvents from "../../hooks/useLiveEvents";
import LiveOptions from "./components/LiveOptions";
import CalendarCard from "./components/Calendar";

const Match = ()=>{
    const list = [1,2,3];
    const {events} = useLiveEvents();
    console.log(events);
    return (
        <div className="flex flex-col gap-[16px]">
            <div className="hidden lg:block">
                <h3 className="text-[20px] font-[500] leading-[26px] text-white">Matches</h3>
            </div>

            <div>
                  <CalendarCard />
            </div>

            <div>
                <LiveOptions />
            </div>
            
            {
                list?.map(l=>(
                    <MatchList key={l} matchListData={events}/>
                ))
            }
        </div>
    );
}
export default Match;