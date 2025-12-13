export interface RawEvent {
    dateEvent: string | null;
    dateEventLocal: string | null;
    idAPIfootball: string | null;
    idEvent:string|null;
    idAwayTeam: string | null;
    idHomeTeam: string | null;
    idLeague: string | null;
    idVenue: string | null;
    intAwayScore: string | null;
    intHomeScore: string | null;
    intRound: string | null;
    intScore: string | null;
    intScoreVotes: string | null;
    intSpectators: string | null;
    strAwayTeam: string | null;
    strAwayTeamBadge: string | null;
    strBanner: string | null;
    strCity: string | null;
    strCountry: string | null;
    strDescriptionEN: string | null;
    strEvent: string | null;
    strEventAlternate: string | null;
    strFanart: string | null;
    strFilename: string | null;
    strGroup: string | null;
    strHomeTeam: string | null;
    strHomeTeamBadge: string | null;
    strLeague: string | null;
    strLeagueBadge: string | null;
    strLocked: string | null;
    strMap: string | null;
    strOfficial: string | null;
    strPoster: string | null;
    strPostponed: string | null;
    strResult: string | null;
    strSeason: string | null;
    strSport: string | null;
    strSquare: string | null;
    strStatus: string | null;
    strThumb: string | null;
    strTime: string | null;
    strTimeLocal: string | null;
    strTimestamp: string | null;
    strTweet1: string | null;
    strVenue: string | null;
    strVideo: string | null;
};

export interface TeamDetail {
    teamName: string;
    isHomeTeam: boolean;
    isWinner: boolean;
    isAggregate: boolean;
    isPenality: boolean;
    yellowCardCount: number;
    redcardCount: number;
    scoreBeforeHalf: number;
    scoreFullTime: number;
    teamBadge: string;
}
export interface EventDetail {
    liveTime: string;
    homeTeam: TeamDetail;
    awayTeam: TeamDetail;
    eventId:string;
}

export interface Event {
    eventLeagueName: string;
    eventDetail: EventDetail[];
}

export interface EventResponse {
    events: Event[] | null;
}

export interface EventButton{
    id:number;
    buttonTitle:string;
    buttonCountBadge:number;
    buttonIcon:React.ElementType |null;
    buttonIsActive:boolean;
}
export interface LiveScoreMenu{
    name:string;
    href:string;
}
export interface MatchHistoryType {
  title: string;
  type: string; // corner, red card, yellow card, goal, change, injury
  time: string;
  playerIn: string | null;
  playerOut: string | null;
  playerAffected: string | null;
  goalPlayerName?: string | null;
  assistPlayerName?: string | null;
  teamType: string; // homeTeam, awayTeam
}

// export interface MatchHistoryType {
//   /** A descriptive summary of the event (e.g., "Goal! Scored by Elias") */
//   title: string;
//   /** The specific type of the event (e.g., "goal", "yellow card") */
//   type: EventType;
//   /** The minute of the match as a string (e.g., "30'") */
//   time: string;
//   /** The minute of the match as a number for sorting purposes */
//   minute: number;
//   /** The player coming IN for a substitution ('change' event) */
//   playerIn: string | null;
//   /** The player going OUT for a substitution ('change' event) */
//   playerOut: string | null;
//   /** The player involved in an event like a card or injury */
//   playerAffected: string | null;
//   /** The team this event is for */
//   teamType: TeamType;
//   // --- New Goal-Specific Properties ---
//   /** The name of the player who scored the goal (only for 'goal' event) */
//   goalPlayerName: string | null;
//   /** The name of the player who assisted the goal (only for 'goal' event) */
//   assistPlayerName: string | null;
// }
export interface MatchEvents{
    beforeHalf:MatchHistoryType[] | [];
    afterHalf:MatchHistoryType[] |[];
}
export interface MatchDetail{
    eventDetail:EventDetail |null;
    history:MatchEvents;
}