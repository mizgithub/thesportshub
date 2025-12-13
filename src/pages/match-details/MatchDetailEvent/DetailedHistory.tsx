import SingleEvent from "./SingleEvent";
import type { MatchHistoryType } from "../../../types";
interface propType{
    history?:MatchHistoryType[];
   
}
const DetailedHistory = ({history}:propType) => {
    return (
        <div className="flex flex-col gap-[16px]">
            {/* game session title */}
           
            {/* details */}

            <div className="flex flex-col gap-[8px] w-[675px] mx-auto">
                {history?.map((hist:MatchHistoryType) => {

                    return (
                        <SingleEvent history={hist}/>
                    )
                })}

            </div>

        </div>
    );
}
export default DetailedHistory;