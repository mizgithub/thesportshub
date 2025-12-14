import { useParams } from "react-router-dom";
import MatchHead from "./components/MatchHead";
import MatchEvent from "./MatchDetailEvent/MatchEvent";
import useMatchHistory from "../../hooks/useMatchHistory";
const MatchDetails = () => {
    const { eventId, time } = useParams();
    const { events } = useMatchHistory({ id: eventId ?? "", time:time??"" });
    return (
        <div className="w-full flex flex-col gap-[16px] bg-">
            <MatchHead
                homeTeam={events?.eventDetail?.homeTeam}
                awayTeam={events?.eventDetail?.awayTeam}
                liveTime={events?.eventDetail?.liveTime}
                date=""
                leagueName={"English Premier League"}
            />
            <div className="md:w-[707px] mx-[16px] md:mx-0">
                {events && <MatchEvent beforeHalf={events?.history.beforeHalf} afterHalf={events?.history.afterHalf} liveTime={time} />}

            </div>
        </div>
    );
}

export default MatchDetails;