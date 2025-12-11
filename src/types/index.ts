export interface RawEvent {
    dateEvent: string | null;
    dateEventLocal: string | null;
    idAPIfootball: string | null;
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