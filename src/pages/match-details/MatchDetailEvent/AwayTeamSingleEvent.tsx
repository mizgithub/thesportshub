import React from "react";

interface propType{
    upperTitle?:string;
    lowerTitle?:string;
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
const AwayTeamSingleEvent = ({upperTitle, lowerTitle, Icon}:propType) => {
    return (
        <div className="w-[309.5px] flex flex-row gap-[10px] justify-start items-center">
            
             <div>
                <hr className="border-[1px] border-[#374151] w-[16px]" />
            </div>
            <div>
                {Icon && <Icon className="w-[12px] h-[12px]"/>}
            </div>
            <div className="flex flex-col flex-gow">
                <span className="text-[12px] font-[400] leading-[16px]">{upperTitle}</span>
                <span className="text-[12px] font-[400] leading-[16px] text-[#6B7280]">{lowerTitle}</span>
            </div>
        </div>
    )
}
    export default AwayTeamSingleEvent
