import { useState, useEffect, useCallback } from "react";
import type { Event, RawEvent, EventDetail, TeamDetail } from "../types/index";

const API_URL = "https://www.thesportsdb.com/api/v1/json/3/eventsnext.php?id=133602";

export const eventRearrangement = (rawEvents: RawEvent[]): Event[] => {
    const parseNumber = (value: string | null): number =>
        value ? Number(value) : 0;

    const isWinner = (homeScore: number, awayScore: number, isHome: boolean) => {
        if (homeScore === awayScore) return false;
        return isHome ? homeScore > awayScore : awayScore > homeScore;
    };

    // Temporary grouping structure
    const leagueMap: Record<string, EventDetail[]> = {};

    rawEvents.forEach((raw) => {
        const leagueName = raw.strLeague ?? "Unknown League";

        const homeScore = parseNumber(raw.intHomeScore);
        const awayScore = parseNumber(raw.intAwayScore);

        const homeTeam: TeamDetail = {
            teamName: raw.strHomeTeam ?? "",
            isHomeTeam: true,
            isWinner: isWinner(homeScore, awayScore, true),
            isAggregate: false,
            isPenality: false,
            yellowCardCount: 0,
            redcardCount: 0,
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
            yellowCardCount: 0,
            redcardCount: 0,
            scoreBeforeHalf: 0,
            scoreFullTime: awayScore,
            teamBadge: raw.strAwayTeamBadge ?? "",
        };

        const eventDetail: EventDetail = {
            liveTime: raw.strTime ?? "",
            homeTeam,
            awayTeam,
        };

        // Initialize league if not present
        if (!leagueMap[leagueName]) {
            leagueMap[leagueName] = [];
        }

        // Add detail to that league
        leagueMap[leagueName].push(eventDetail);
    });

    // Convert map → Event[]
    return Object.entries(leagueMap).map(([leagueName, details]) => ({
        eventLeagueName: leagueName,
        eventDetail: details
    }));
};



const useLiveEvents = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);



    const fetchEvents = useCallback(async () => {
        try {
            if (events.length === 0)
                setLoading(true);
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`Error occured while fetching live events. Please make Sure your connection is stable and try again.Status${response.status}`);

            }
            const data = await response.json();

            if (data) {
                console.log(data);
                //rearrangement
                const eventsArranged: Event[] = eventRearrangement(data.events)
                setEvents(eventsArranged);
            }
            else {
                setEvents([]);
            }

        }
        catch (err) {
            console.log(err);
            setError('Error occured while fetching live events. Please make Sure your connection is stable and try again');
        }
        finally {
            setLoading(false);
        }
    }, [events.length]);


    useEffect(() => {
        fetchEvents();
        const intervalId = setInterval(fetchEvents, 20000);
        return () => clearInterval(intervalId);
    }, [fetchEvents]);

    return { events, loading, error }

};
export default useLiveEvents;
