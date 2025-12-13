import { MenuItems } from "../MenuItemsList";
import { useState } from "react";
import { Link } from "react-router-dom";
import WorldIcon from '../../../assets/WorldIcon.svg?react';
import BallIconV2 from '../../../assets/BallIconV2.svg?react';
import EnglandFlagCircleIcon from '../../../assets/EnglandFlagCircleIcon.svg?react';
import UKFlagCircleIcon from '../../../assets/UKFlagCircleIcon.svg?react';
import { BiChevronDown } from "react-icons/bi";
const DesktopNavigation = () => {
    const [activeMenuItem, setActiveMenuItem] =useState<string>(MenuItems()[0].name);
    return (
        <div className="flex flex-row justify-between items-center gap-[16px] justify-center">
        <div className="flex flex-row gap-[4px] items-center">
            {
                MenuItems().map((menuItem, index)=>(
                    <Link to={menuItem.link} 
                        key={index}
                        onClick={() => setActiveMenuItem(menuItem.name)}
                        className={`border-b-[2px] ${activeMenuItem === menuItem.name ? 'border-[#00FFA5] text-[#00FFA5]' : 'border-transparent text-white'} px-[4px] py-[8px]`}
                    >
                        <span className="text-[18px] text-[400] font-poppins leading-[150%]">{menuItem.name}</span>
                    </Link>
                ))
            }
        </div>
        <div className="flex flex-row gap-[16px] items-center">
                <div className="flex rounded-full bg-[#00000026] p-[10px] items-center justify-center cursor-pointer">
                    <WorldIcon className="w-[24px] h-[24px] "/>
                </div>
                 <div className="flex rounded-full bg-[#00000026] p-[10px] items-center justify-center cursor-pointer">
                    <BallIconV2 className="w-[24px] h-[24px] "/>
                </div>
                <div className="flex flex-row gap-[10px] rounded-[9999px] bg-[#00000026] flex-grow h-[40px] px-[16px] py-[8px] items-center justify-center cursor-pointer">
                    <EnglandFlagCircleIcon className="w-[24px] h-[24px] "/>
                    <span className="text-[16px] font-[500] leading-[150%]  text-[#E6E0E9] font-poppins">Premier League</span>
                    <BiChevronDown className="w-[16px] h-[16px] text-[#E6E0E9]"/>
                </div>
                <div className="flex flex-row gap-[10px] rounded-[9999px] bg-[#00000026] flex-grow h-[40px] px-[16px] py-[8px] items-center justify-center cursor-pointer">
                  
                    <span className="text-[16px] font-[500] leading-[150%]  text-[#E6E0E9] font-poppins">2024/25</span>
                    <BiChevronDown className="w-[16px] h-[16px] text-[#E6E0E9]"/>
                </div>
                <div className="flex rounded-full bg-[#00000026] p-[10px] items-center justify-center cursor-pointer">
                    <UKFlagCircleIcon className="w-[24px] h-[24px] "/>
                </div>
        </div>
        </div>
    )
}

export default DesktopNavigation