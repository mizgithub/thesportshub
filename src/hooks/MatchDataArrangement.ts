import type { RawEvent, EventDetail, TeamDetail } from "../types";
import { getRandomMatchTime } from "./RandomMatchTime";

interface propsType{
    raw?:RawEvent,
    liveTime?:string
}
const MatchRearrangement = ({raw,liveTime}:propsType): EventDetail | null=> {
    const parseNumber = (value: string | null): number =>
        value ? Number(value) : 0;

    const isWinner = (homeScore: number, awayScore: number, isHome: boolean) => {
        if (homeScore === awayScore) return false;
        return isHome ? homeScore > awayScore : awayScore > homeScore;
    };

    // Temporary grouping structure
        if(raw){
        const homeScore = parseNumber(raw.intHomeScore);
        const awayScore = parseNumber(raw.intAwayScore);

        const homeTeam: TeamDetail = {
            teamName: raw.strHomeTeam ?? "",
            isHomeTeam: true,
            isWinner: isWinner(homeScore, awayScore, true),
            isAggregate: false,
            isPenality: false,
            yellowCardCount: Math.floor(Math.random() * 3),// Random yellow card count for demonstration
            redcardCount: Math.floor(Math.random() * 3),// Random red card count for demonstration
            scoreBeforeHalf: 0,
            scoreFullTime: homeScore,
            teamBadge: raw.strHomeTeamBadge ?? "",
        };

        const awayTeam: TeamDetail = {
            teamName: raw.strAwayTeam ?? "",
            isHomeTeam: false,
            isWinner: isWinner(homeScore, awayScore, false),
            isAggregate: false,
            isPenality: false,
            yellowCardCount: Math.floor(Math.random() * 3),// Random yellow card count for demonstration
            redcardCount: Math.floor(Math.random() * 3),// Random red card count for demonstration
            scoreBeforeHalf: 0,
            scoreFullTime: awayScore,
            teamBadge: raw.strAwayTeamBadge ?? "",
        };

        const eventDetail: EventDetail = {
            liveTime: liveTime??getRandomMatchTime(),
            homeTeam,
            awayTeam,
            eventId:raw.idAPIfootball??""

        };
          return eventDetail;
    }
    else{
        return null
    }

        // Initialize league if not present
      
        // Add detail to that league
    

    
    
  
};
export default MatchRearrangement;