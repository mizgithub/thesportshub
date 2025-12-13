import MatchList from "./components/MatchList";
import useLiveEvents from "../../hooks/useLiveEvents";
import LiveOptions from "./components/LiveOptions";
import CalendarCard from "./components/Calendar";

const Match = () => {
    const { events } = useLiveEvents();
    return (
        <div className="flex flex-col gap-[16px] p-[16px]">
            <div className="hidden lg:block">
                <h3 className="text-[20px] font-[500] leading-[26px] text-white">Matches</h3>
            </div>

            <div>
                <CalendarCard />
            </div>

            <div>
                <LiveOptions />
            </div>



            <MatchList matchListData={events} />


        </div>
    );
}
export default Match;