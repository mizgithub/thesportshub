import Button from "../../../components/Button";
import { useState } from "react";
import type { EventButton } from "../../../types/index";
import LiveIcon from '../../../assets/LiveIcon.svg?react';
import HeartIcon from '../../../assets/HeartIcon.svg?react';
const options:EventButton[] = [
    {
        id:1,
        buttonTitle:"All",
        buttonIcon:null,
        buttonCountBadge:6,
        buttonIsActive:true
    },
     {
        id:2,
        buttonTitle:"Live",
        buttonIcon:LiveIcon,
        buttonCountBadge:4,
        buttonIsActive:false
    },
     {
        id:3,
        buttonTitle:"Favorites",
        buttonIcon:HeartIcon,
        buttonCountBadge:2,
        buttonIsActive:false
    }
]

const LiveOptions = ()=>{
    const [optionButtons, setOptionButtons] = useState<EventButton[]>(options);

    return(
        <div className="flex flex-row w-full md-[w-328px] gap-[16px] h-[36px]">
            {
                optionButtons?.map((button:EventButton)=>(
                    <Button {...button} />
                ))
            }
        </div>
    );
}
export default LiveOptions