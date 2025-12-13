import DetailedHistory from "./DetailedHistory";
import type { MatchHistoryType } from "../../../types";

interface propType {
    beforeHalf?: MatchHistoryType[] | [];
    afterHalf?: MatchHistoryType[] | [];
    liveTime?: string;
}
const MatchEvent = ({ beforeHalf, afterHalf, liveTime }: propType) => {

    console.log("from matchevent");
    console.log(afterHalf);
    console.log(beforeHalf);
    return (
        <div className="flex flex-col p-[16px] gap-[16px] bg-[#1D1E2B] rounded-[16px] border-b-[1px] border-[#292B41] justify-center items-center">
            <div className="h-[20px] flex justify-start w-full">
                <span className="text-[14px] text-[500] leading-[20px] text-white justify-start">Events</span>
            </div>
            {liveTime && liveTime >= '46' &&
                <>
                    {liveTime >= '90' &&
                        <div className="flex flex-row gap-[10px] justify-center items-center">
                            <hr className="flex-grow text-[#292B41] border-[1px] border-[#292B41]" />
                            <span className="text-[400] text-[12px] leading-[16px] text-[#E5E7EB]">Fulltime 2-1</span>
                            <hr className="flex-grow text-[#292B41] border-[1px] border-[#292B41]" />
                        </div>
                    }
                    <div>
                        <DetailedHistory history={afterHalf} />
                    </div>
                </>}

            {liveTime && liveTime >= '45' &&
                <div className="flex flex-row gap-[10px] justify-center items-center">
                    <hr className="flex-grow text-[#292B41] border-[1px] border-[#292B41]" />
                    <span className="text-[400] text-[12px] leading-[16px] text-[#E5E7EB]">Halftime 2-1</span>
                    <hr className="flex-grow text-[#292B41] border-[1px] border-[#292B41]" />
                </div>
            }


            <div>
                <DetailedHistory history={beforeHalf} />
            </div>


            <div className="flex flex-row gap-[10px] justify-center items-center w-full">
                <hr className="flex-grow border border-[#292B41]" />
                <span className="text-[12px] font-normal leading-[16px] text-[#E5E7EB]">
                    Kick Off - 13:00
                </span>
                <hr className="flex-grow border border-[#292B41]" />
            </div>


        </div>
    );
};
export default MatchEvent;