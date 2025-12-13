// export function getRandomMatchTime(): string {
//   const random = Math.random();

//   if (random < 0.4) {
//     // 40% chance → first half 0-45'
//     const minute = Math.floor(Math.random() * 46); // 0 to 45
//     return `${minute}'`;
//   } else if (random < 0.5) {
//     // 10% chance → halftime
//     return "HT";
//   } else if (random < 0.9) {
//     // 40% chance → second half 46-90'
//     const minute = Math.floor(Math.random() * 45) + 46; // 46 to 90
//     return `${minute}'`;
//   } else {
//     // 10% chance → full time
//     return "FT";
//   }
// }

export function getRandomMatchTime(): string {
  const random = Math.random();

  if (random < 0.3) {
    // 10% chance → Not Started
    return "NS";
  } else if (random < 0.45) {
    // 35% chance → first half 0-45'
    // (from 0.1 up to, but not including, 0.45)
    const minute = Math.floor(Math.random() * 46); // 0 to 45
    return `${minute}'`;
  } else if (random < 0.55) {
    // 10% chance → halftime
    // (from 0.45 up to, but not including, 0.55)
    return "HT";
  } else if (random < 0.95) {
    // 40% chance → second half 46-90'
    // (from 0.55 up to, but not including, 0.95)
    const minute = Math.floor(Math.random() * 45) + 46; // 46 to 90
    return `${minute}'`;
  } else {
    // 5% chance → full time
    // (0.95 and above)
    return "FT";
  }
}