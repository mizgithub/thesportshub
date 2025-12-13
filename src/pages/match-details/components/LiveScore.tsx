
import type { TeamDetail } from "../../../types";
interface propType {
    homeTeam?: TeamDetail;
    awayTeam?: TeamDetail;
    liveTime?: string;
    date?: string;
};
const LiveScore = ({ homeTeam, awayTeam, liveTime, date }: propType) => {
    return (
        <div className="flex flex-row h-[64px] justify-center items-center">
            <div className="flex flex-col w-[148px] md:w-[320px] h-[64px] rounded-[8px] items-center justify-center">
                <div className="flex flex-row justify-start gap-[10px]">
                    <img src={homeTeam?.teamBadge} className="h-[42px] w-[42px]" />
                    <div className="flex flex-row gap-[2px]">
                        {(homeTeam?.yellowCardCount??0) > 0 &&
                            <div className="bg-[#E7D93F] w-[10px] h-[12px] text-[9px] text-[#111827] font-[500] text-center justify-center items-center px-[2px]"> {homeTeam?.yellowCardCount} </div>
                        }
                        {(homeTeam?.redcardCount??0) > 0 &&
                            <div className="bg-[#EE5E52] w-[10px] h-[12px] text-[9px] text-[#111827] font-[500] text-center justify-center items-center px-[2px]"> {homeTeam?.redcardCount} </div>
                        }
                    </div>
                </div>
                <div className="w-full justify-center text-center">
                    <span className="font-[500] text-[14px] leading-[20px]">{homeTeam?.teamName}</span>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[8px]">
                <div className="text-[#E5E7EB] text-[11px] leading-[15px] font-[400]">
                    11 AUG
                </div>
                <div className="font-[600] text-[22px] leading-[28px] justify-center">
                    {homeTeam?.scoreFullTime} - {awayTeam?.scoreFullTime}
                </div>
                <div className="text-[#9CA3AF] text-[11px] leading-[15px] font-[400]">

                    <div className={`text-[10px] font-[400] leading-[15px] justify-center text-white ${liveTime === "FT" ? "bg-[#EE5E52]" : ""}`}>{liveTime == "NS"?"23:00":liveTime}</div>

                </div>
                {date}
            </div>
            <div className="flex flex-col w-[148px] md:w-[320px] h-[64px] rounded-[8px] items-center justify-center">
                <div className="flex flex-row justify-start gap-[10px]">
                    <div className="flex flex-row gap-[2px]">
                        {(awayTeam?.yellowCardCount??0) > 0 &&
                            <div className="bg-[#E7D93F] w-[10px] h-[12px] text-[9px] text-[#111827] font-[500] text-center justify-center items-center px-[2px]"> {awayTeam?.yellowCardCount} </div>
                        }
                        {(awayTeam?.redcardCount??0) > 0 &&
                            <div className="bg-[#EE5E52] w-[10px] h-[12px] text-[9px] text-[#111827] font-[500] text-center justify-center items-center px-[2px]"> {awayTeam?.redcardCount} </div>
                        }
                    </div>
                    <img src={awayTeam?.teamBadge} className="h-[42px] w-[42px]" />

                </div>
                <div className="w-full justify-center text-center">
                    <span className="font-[500] text-[14px] leading-[20px]">{awayTeam?.teamName}</span>
                </div>
            </div>

        </div>
    );
};

export default LiveScore;