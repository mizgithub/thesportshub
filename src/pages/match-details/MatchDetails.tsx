import { useParams } from "react-router-dom";

const MatchDetails = ()=>{
    const {eventId} = useParams();
    return(
        <div>
            match details {eventId}
        </div>
    );
}

export default MatchDetails;