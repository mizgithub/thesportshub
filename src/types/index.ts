export interface Event{
    idEvent:string;
    strEvent:string;
    strLeague:string;
    strHomeTeam:string;
    strAwayTeam:string;

};
export interface EventResponse{
    events:Event[] | null;
}