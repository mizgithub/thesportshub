import type { MatchHistoryType, MatchEvents } from "../types";

// Example player lists
const homePlayers = ["Elias", "Samuel", "Daniel", "Eyob", "Meron"];
const awayPlayers = ["Luis", "Abel", "Robel", "Ahmed", "Tesfaye"];

// Random helper functions
const getRandomItem = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const eventTypes: MatchHistoryType["type"][] = [
  "corner",
  "red",
  "yellow",
  "goal",
  "change",
  "injury",
];
const getOrdinalSuffix = (n: number):string =>{
  const j = n % 10,
    k = n % 100;
  if (j === 1 && k !== 11) {
    return "st";
  }
  if (j === 2 && k !== 12) {
    return "nd";
  }
  if (j === 3 && k !== 13) {
    return "rd";
  }
  return "th";
}

export function generateMatchHistory(currentMinute: string): MatchEvents {
  const events: (MatchHistoryType & { minute: number })[] = [];

  let homeCornerCount = 0;
  let awayCornerCount = 0;

  const totalEvents = getRandomInt(5, 10);

  for (let i = 0; i < totalEvents; i++) {
    const minute = getRandomInt(1, parseInt(currentMinute));
    const teamType = Math.random() > 0.5 ? "homeTeam" : "awayTeam";
    const players = teamType === "homeTeam" ? homePlayers : awayPlayers;

    const type = getRandomItem(eventTypes);

    let playerAffected: string | null = null;
    let playerIn: string | null = null;
    let playerOut: string | null = null;
    let goalPlayerName: string | null = null;
    let assistPlayerName: string | null = null;
    let title = "";

    // ✅ GOAL
    if (type === "goal") {
      goalPlayerName = getRandomItem(players);
      assistPlayerName = getRandomItem(
        players.filter(p => p !== goalPlayerName)
      );
      playerAffected = goalPlayerName;
      title = `Goal! ${goalPlayerName} scores`;

    // ✅ CORNER
    } else if (type === "corner") {
      if (teamType === "homeTeam") {
        homeCornerCount++;
        title = `${homeCornerCount} ${getOrdinalSuffix(homeCornerCount)} corner`;
      } else {
        awayCornerCount++;
        title = `${awayCornerCount} ${getOrdinalSuffix(awayCornerCount)} corner`;
      }

    // ✅ SUBSTITUTION
    } else if (type === "change") {
      playerOut = getRandomItem(players);
      playerIn = getRandomItem(players.filter(p => p !== playerOut));
      title = `Substitution for ${teamType === "homeTeam" ? "Home Team" : "Away Team"}`;

    // ✅ CARD / INJURY
    } else {
      playerAffected = getRandomItem(players);
      title =
        type === "yellow"
          ? `Yellow card for ${playerAffected}`
          : type === "red"
          ? `Red card for ${playerAffected}`
          : `Injury to ${playerAffected}`;
    }

    events.push({
      title,
      type,
      time: `${minute}`,
      playerIn,
      playerOut,
      playerAffected,
      goalPlayerName,
      assistPlayerName,
      teamType,
      minute, // internal only
    });
  }

  events.sort((a, b) => a.minute - b.minute);
  const reverse_events = events.reverse();

  const beforeHalf = reverse_events
    .filter(e => e.minute <= 45)
    .map(({  ...rest }) => rest);

  const afterHalf =
    parseInt(currentMinute) > 45
      ? reverse_events
          .filter(e => e.minute > 45)
          .map(({ ...rest }) => rest)
      : [].reverse();

  return {
    beforeHalf,
    afterHalf,
  };
}
