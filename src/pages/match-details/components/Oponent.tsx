import { BiBadge } from "react-icons/bi";

const Oponent  = ()=>{
    return(
        <div className="flex flex-col w-[320px] h-[64px] rounded-[8px] items-center justify-center">
            <div className="flex flex-row justify-start">
                <BiBadge className="h-[42px] w-[42px]"/>
              
                    <div className="bg-[#E7D93F] w-[10px] h-[12px] text-[9px] text-[#111827] font-[500] text-center justify-center items-center px-[2px]"> 1 </div>
                

            </div>
            <div className="w-full justify-center text-center">
                <span className="font-[500] text-[14px] leading-[20px]">Arsenal</span>
            </div>
        </div>
    );
};
export default Oponent