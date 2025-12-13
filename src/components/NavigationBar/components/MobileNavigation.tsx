import WorldIcon from '../../../assets/WorldIcon.svg?react';
import BallIconV2 from '../../../assets/BallIconV2.svg?react';
import EnglandFlagCircleIcon from '../../../assets/EnglandFlagCircleIcon.svg?react';
import UKFlagCircleIcon from '../../../assets/UKFlagCircleIcon.svg?react';
import { BiChevronDown } from "react-icons/bi";
// import { Hamburg } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
const MobileNavigation = () => {
    return (
        <div className="flex flex-row justify-between items-center gap-[16px] justify-center">
       
        <div className="flex flex-row gap-[10px] md:gap-[16px] items-center">
                
                 <div className="flex rounded-full bg-[#00000026] p-[8px] items-center justify-center cursor-pointer">
                    <BallIconV2 className="w-[16px] h-[16px] "/>
                </div>
                <div className="flex rounded-full bg-[#00000026] p-[8px] items-center justify-center cursor-pointer">
                    <WorldIcon className="w-[16px] h-[16px] "/>
                </div>
               <div className="flex rounded-full bg-[#00000026] p-[8px] items-center justify-center cursor-pointer">
                    <EnglandFlagCircleIcon className="w-[16px] h-[16px] "/>
                </div>
                <div className="flex flex-row gap-[10px] rounded-[9999px] bg-[#00000026] flex-grow h-[40px] px-[16px] py-[8px] items-center justify-center cursor-pointer">
                  
                    <span className="text-[16px] font-[500] leading-[150%]  text-[#E6E0E9] font-poppins">2024/25</span>
                    <BiChevronDown className="w-[16px] h-[16px] text-[#E6E0E9]"/>
                </div>
               
        </div>
        <div className="">
            <BiMenu className="w-[32px] h-[32px] text-white"/>
        </div>
        </div>
    )
}

export default MobileNavigation