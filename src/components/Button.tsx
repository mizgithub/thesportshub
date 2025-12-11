import type { EventButton } from "../types/index";
import { Link } from "react-router-dom";


const Button  = (props:EventButton)=>{
     const activeClasses = props.buttonIsActive
        ? 'bg-[#00FFA5] text-[#26273B]'
        : 'bg-[#1D1E2B] text-[#D1D5DB]';
    
    const badgeCount = props.buttonIsActive?'text-[#00FFA5]':'text-white';
    return (
        <Link to={'#'} className={`rounded-[8px] px-[12px] py-[8px] text-[14px] ${activeClasses} hover:opacity-80 transition duration-150`}>
            <div className="flex flex-row items-center gap-2">
                
                {/* Icon Container */}
                <div className="flex items-center justify-center">
                    {props.buttonIcon&&<props.buttonIcon />}
                </div>
                
                {/* Title */}
                <div className="">
                    {props.buttonTitle}
                </div>
                
                {/* Badge (16x16px circle with text inside) */}
                <div>
                    <div className={`flex items-center justify-center w-[16px] h-[16px] leading-[16px] text-[12px] font-[500] bg-[#181921] rounded-[12px] gap-[4px] ${badgeCount}`}>
                        {props.buttonCountBadge}
                    </div>
                </div>
            </div>
        </Link>
    );
}
export default Button