import { BiChevronLeft, BiChevronRight, BiCalendar } from "react-icons/bi";
import HorizontalCalendar from "./ScrollableCalander";
const CalendarCard = ()=>{
    return(
        <>
        <div className="hidden md:block md:flex md:flex-row md:justify-between px-[16px]  py-[8px] gap-24px bg-[#1D1E2B]">
            <BiChevronLeft className="h-[20px] w-[20px]"/>
            <div className="flex flex-row gap-[10px] p-[8px]">
                <BiCalendar />
                <span className="text-[14px] leading-[20px] font-[600]">Today</span>
            </div>
            <BiChevronRight className="h-[20px] w-[20px]"/>
        </div>
        <div className="md:hidden">
            <HorizontalCalendar />
        </div>
        </>
    )
};
export default CalendarCard;