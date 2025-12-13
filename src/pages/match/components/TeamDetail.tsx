import type { TeamDetail } from "../../../types";
import { FaCheck } from "react-icons/fa";
// import RedCard from '../../../assets/RedCard.svg?react';
import YellowCard from '../../../assets/YellowCard.svg?react';
import RedCard from '../../../assets/RedCard.svg?react';


interface TeamDetailPropType {
    team: TeamDetail
}


const TeamDetailCard = ({ team }: TeamDetailPropType) => {

    return (
        <div className="flex flex-row gap-[8px] items-center justify-between">

            <div className="flex flex-row justify-start items-center gap-[8px] p-[8px] h-[18px] w-[200px] md:w-[660px]">
                <img src={team.teamBadge} className="h-[16.55px] w-[16px]" />
                <span className="text-[12px] leading-[16px] font-[400] whitespace-normal">{team.teamName}</span>
                <div className="flex flex-row gap-[2px]">
                    {
                        team.redcardCount > 0 && Array.from({ length: team.redcardCount }).map((_, index) => (
                            <RedCard key={index}/>
                        ))
                        
                    }
                    {
                        team.yellowCardCount > 0 && Array.from({ length: team.yellowCardCount }).map((_, index) => (
                            <YellowCard key={index}/>
                        ))
                        
                    }
                    
                </div>
                
                
               
                <div className="flex flex-row justify-start bg-[#26273B] rounded-[100px] p-[4px] items-center">
                    <FaCheck className="w-[7px] h-[5px] text-[#00FFA5]" />
                    <h3 className="text-[#00FFA5] text-[8px] font-[400] leading-[0px]">PEN</h3>
                </div>
            </div>

            {/* halftime */}
            <div className="flex flex-row justify-between">
                <div className="w-[15px]">
                    <h3 className="font-[400] text-[#6B7280] text-[11px] leading-[15px] ">
                        [7]
                    </h3>
                </div>
                {/* fulltime */}
                <div className="w-[15px] items-center">
                    <h3 className="font-[600] text-white text-[12px] leading-[16px] ">
                        2
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default TeamDetailCard;