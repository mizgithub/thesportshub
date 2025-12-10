import MatchCard from "./MatchCard";

const MatchList = ()=>{
    const list = [1,2,3];
    return(
        <div>
            league title
            {
                list?.map(l=>(
                    <MatchCard key={l}/>
                ))
            }
        </div>
    );
}
export default MatchList