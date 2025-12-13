import Button from "../../../components/Button";
import { useState } from "react";
import type { EventButton } from "../../../types/index";


interface LiveOptionsPropType{
    options:EventButton[];
}
const LiveOptions = ({options}:LiveOptionsPropType)=>{
    const [optionButtons] = useState<EventButton[]>(options);
    
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