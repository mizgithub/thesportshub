import SingleMatchCard from "./SingleMatchCard";
import type { Event, EventDetail } from "../../../types";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
interface PropType {
    matchListData: Event[];
}

const MatchList = ({ matchListData }: PropType) => {

    return (
        matchListData?.map(matchList => (
            <div className="flex flex-col w-full rounded-[8px] p-[16px] bg-[#1D1E2B] gap-[8px]">

                <div className="flex flex-row justify-between">
                    <div className="h-[20px]">
                        <h3 className="font-[400] text-[14px] text-white leading-[20px]">
                            {matchList.eventLeagueName}
                        </h3>
                    </div>
                    <div>
                        <Link to={'#'}>
                            <BiChevronRight className="h-[18px] w-[18px]"/>
                        </Link>
                    </div>
                </div>

                {matchList.eventDetail?.map((eventSublist:EventDetail)=>(
                    <SingleMatchCard eventDetail={eventSublist} />
                ))}

            </div>


        ))
    );
}
export default MatchList