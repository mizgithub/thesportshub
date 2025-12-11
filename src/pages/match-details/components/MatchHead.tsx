import { BsArrowLeft } from "react-icons/bs";
import LiveScore from "./LiveScore";
const MatchHead = ()=>{
    return(
        <div className="flex flex-col justify-between w-[707px] bg-[#1D1E2B] h-[198px] pt-[8px]">
            
            {/* back link */}
            <div className="flex flex-row w-full py-[8px] px-[16px] h-[40px] gap-[16px] ">
                <div>
                    <BsArrowLeft className="h-[24px] w-[24px]"/>
                </div>
                <div>
                    <span className="text-[14px] leading-[20px] font-[400]">English premier league</span>
                </div>
            </div>

            {/* live score */}
            <div>
                <LiveScore />
            </div>
            <div>
                menu
            </div>

        </div>
    );
};
export default MatchHead;