import { Link } from "react-router-dom";
import type { EventDetail } from "../../../types";
import { LuEllipsisVertical } from "react-icons/lu";
import TeamDetailCard from "./TeamDetail";

interface MatchCardPropType {
    eventDetail: EventDetail;
};
const SingleMatchCard = ({ eventDetail }: MatchCardPropType) => {
    return (
        <div className="border-b-[1px] border-solid border-[#292B41] py-[8px] flex flex-row justify-between">
            <div className="flex flex-row justify-between  border-l-[3px] border-[#EE5E52]  bg-gradient-to-r from-[#00FFA51A] from-[1%] to-transparent items-center h-[76px]">
                <div className="flex items-center mx-auto w-[53px] justify-center">
                    <span className="text-[12px] leading-[16px] font-[400]">FT</span>
                </div>
                <div className="flex flex-col py-[8px] gap-[8px]">
                    {/* home team */}
                    <TeamDetailCard team={eventDetail.homeTeam} />
                    {/* away team */}
                    <TeamDetailCard team={eventDetail.awayTeam} />
                </div>
                <div className="items-center">
                    <Link to={'#'}>
                        <LuEllipsisVertical className="w-[16px] h-[16px]" />
                    </Link>
                </div>
            </div>

        </div>

    );
};
export default SingleMatchCard;