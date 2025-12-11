import Oponent from "./Oponent";
const LiveScore = ()=>{
    return(
        <div className="flex flex-row w-full h-[64] justify-center items-center">
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