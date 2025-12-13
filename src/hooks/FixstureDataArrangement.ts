import type { RawEvent, EventDetail, TeamDetail, Event } from "../types";
import { getRandomMatchTime } from "./RandomMatchTime";

interface propsType {
    rawEvents: RawEvent[],
}
export const EventRearrangement = ({ rawEvents }: propsType): Event[] => {
    const parseNumber = (value: string | null): number =>
        value ? Number(value) : 0;

    const isWinner = (homeScore: number, awayScore: number, isHome: boolean) => {
        if (homeScore === awayScore) return false;
        return isHome ? homeScore > awayScore : awayScore > homeScore;
    };


    // Temporary grouping structure
    const leagueMap: Record<string, EventDetail[]> = {};
 
    rawEvents?.forEach((raw) => {
        const leagueName = raw.strLeague ?? "Unknown League";

        const liveTime = getRandomMatchTime();

        const homeScore = liveTime != "NS" ? parseNumber(raw.intHomeScore) : 0;
        const awayScore = liveTime != "NS" ? parseNumber(raw.intAwayScore) : 0;

        const homeTeam: TeamDetail = {
            teamName: raw.strHomeTeam ?? "",
            isHomeTeam: true,
            isWinner: isWinner(homeScore, awayScore, true),
            isAggregate: false,
            isPenality: false,
            yellowCardCount: liveTime != "NS" ? Math.floor(Math.random() * 3) : 0,// Random yellow card count for demonstration
            redcardCount: liveTime != "NS" ? Math.floor(Math.random() * 3) : 0,// Random red card count for demonstration
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
            yellowCardCount: liveTime != "NS" ? Math.floor(Math.random() * 3) : 0,// Random yellow card count for demonstration
            redcardCount: liveTime != "NS" ? Math.floor(Math.random() * 3) : 0,// Random red card count for demonstration
            scoreBeforeHalf: 0,
            scoreFullTime: awayScore,
            teamBadge: raw.strAwayTeamBadge ?? "",
        };

        const eventDetail: EventDetail = {
            liveTime: liveTime,
            homeTeam,
            awayTeam,
            eventId: raw.idAPIfootball ?? ""

        };

        // Initialize league if not present
        if (!leagueMap[leagueName]) {
            leagueMap[leagueName] = [];
        }

        // Add detail to that league
        leagueMap[leagueName].push(eventDetail);
    });

    // Convert map → Event[]
    const event_arranged = Object.entries(leagueMap).map(([leagueName, details]) => ({
        eventLeagueName: leagueName,
        eventDetail: details
    }));

    console.log("Events Rearranged:", event_arranged);
    return event_arranged;
};