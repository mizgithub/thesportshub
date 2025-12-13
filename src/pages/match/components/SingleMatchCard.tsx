import { Link } from "react-router-dom";
import type { EventDetail } from "../../../types";
import { LuEllipsisVertical } from "react-icons/lu";
import TeamDetailCard from "./TeamDetail";

interface MatchCardPropType {
    eventDetail: EventDetail;
};
const SingleMatchCard = ({ eventDetail }: MatchCardPropType) => {
    return (
        <Link to={`matchdetails//${eventDetail.eventId}`}>
            <div className="border-b-[1px] border-solid border-[#292B41] py-[8px] flex flex-row justify-between">
                <div className={`flex flex-row justify-between  border-l-[3px]
                     ${eventDetail.liveTime === "FT" ? "border-[#EE5E52] bg-gradient-to-r from-[#EE5E520A] from-[0.5%] to-transparent to-[15%]"
                        : eventDetail.liveTime === "NS" ? "border-[#374151]  bg-transparent" : "border-[#00FFA5] bg-gradient-to-r from-[#00FFA51A] from-[0.5%] to-transparent to-[15%]"} items-center h-[76px]`}>
                    <div className="flex items-center mx-auto w-[53px] justify-center">
                        <span className={`text-[12px] leading-[16px] font-[400] ${eventDetail.liveTime === "FT" ? "text-[#EE5E52]" : eventDetail.liveTime === "NS" ? "text-white" : "text-[#00FFA5]"}`}>
                            
                            {eventDetail.liveTime === "NS" ? "23:00" : eventDetail.liveTime === "FT" ? "FT" :

                            <div className="relative inline-block">
                                <span> {eventDetail.liveTime} </span>
                                <div className="absolute bottom-0 left-0 right-0 h-[3px] overflow-hidden">
                                    <div className="w-full h-full bg-[#00FFA5] animate-stretch origin-left">  
                                    </div>
                                </div>

                            </div>
                            
                            }
                            

                            

                        </span>
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
        </Link>

    );
};
export default SingleMatchCard;