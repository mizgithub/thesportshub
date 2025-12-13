import { BsArrowLeft } from "react-icons/bs";
import HorizontalScrollMenu from "./Menu";
import LiveScore from "./LiveScore";
import type { TeamDetail } from "../../../types";

interface propType{
    homeTeam?:TeamDetail;
    awayTeam?:TeamDetail;
    liveTime?:string;
    date?:string;
    leagueName?:string;
};

const MatchHead = ({homeTeam, awayTeam, liveTime, date, leagueName}:propType) => {
    return (
        <div className="flex flex-col justify-between w-full md:w-[707px] bg-[#1D1E2B] h-[198px] pt-[8px]">

            {/* back link */}
            <div className="flex flex-row py-[8px] px-[16px] h-[40px] gap-[16px] ">
                <div>
                    <BsArrowLeft className="h-[24px] w-[24px]" />
                </div>
                <div>
                    <span className="text-[14px] leading-[20px] font-[400]">{leagueName}</span>
                </div>
            </div>

            {/* live score */}
            <div>
                <LiveScore homeTeam={homeTeam} awayTeam={awayTeam} liveTime={liveTime} date={date}/>
            </div>
            <div>
                <HorizontalScrollMenu />
            </div>

        </div>
    );
};
export default MatchHead;