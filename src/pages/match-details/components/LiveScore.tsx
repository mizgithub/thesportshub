import Oponent from "./Oponent";
const LiveScore = ()=>{
    return(
        <div className="flex flex-row h-[64px] justify-center items-center">
            <div>
                <Oponent />
            </div>
            <div>
                score
            </div>
            <div>
                <Oponent />
            </div>

        </div>
    );
};

export default LiveScore;