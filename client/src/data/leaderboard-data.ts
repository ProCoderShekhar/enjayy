// The CSV data converted to a JSON format
export interface LeaderboardEntry {
  rank: number;
  player: string;
  initial: string;
  wager: number;
  wagerFormatted: string;
  prize: string;
  rankStyle: string;
}

// Calculate prize based on rank and total wager
function calculatePrize(rank: number, totalWager: number): string {
  // Base prize amounts
  const basePrizes = [
    100.00, // 1st place
    80.00,  // 2nd place
    60.00,  // 3rd place
    40.00,  // 4th place
    20.00,  // 5th place
    4.00,   // 6th-10th place
  ];
  
  // Calculate the bonus percentage based on total wager
  // Every 75,000 wager adds 6.25% up to 25% max (4 tiers)
  const bonusTiers = Math.min(Math.floor(totalWager / 75000), 4);
  const bonusMultiplier = 1 + (bonusTiers * 0.0625);
  
  // Get the base prize for this rank
  let basePrize = 0;
  if (rank === 1) basePrize = basePrizes[0];
  else if (rank === 2) basePrize = basePrizes[1];
  else if (rank === 3) basePrize = basePrizes[2];
  else if (rank === 4) basePrize = basePrizes[3];
  else if (rank === 5) basePrize = basePrizes[4];
  else if (rank >= 6 && rank <= 10) basePrize = basePrizes[5];
  
  // Apply the bonus multiplier
  const finalPrize = basePrize * bonusMultiplier;
  
  // Return formatted as currency
  return `$${finalPrize.toFixed(2)}`;
}

// Function to format wager amount with commas and dollar sign
function formatWager(wager: number): string {
  return `$${wager.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Function to get the ranking style based on position
function getRankStyle(rank: number): string {
  switch (rank) {
    case 1:
      return "bg-sky-400 text-dark";
    case 2:
      return "bg-gray-300 text-dark";
    case 3:
      return "bg-amber-600 text-dark";
    default:
      return "bg-gray-800 text-gray-300";
  }
}

// Parse CSV data into a usable format
export function getLeaderboardData(): LeaderboardEntry[] {
  // This is the CSV data converted to JSON
  const rawData = [
    { user_name: "B3o", wagered: 63842.74496411661, rank: 1 },
    { user_name: "PrincessWin", wagered: 22201.87398190254, rank: 2 },
    { user_name: "AppleEater", wagered: 17867.954955621964, rank: 3 },
    { user_name: "NachoWinz", wagered: 4879.594161761686, rank: 4 },
    { user_name: "Sicked12", wagered: 3719.433980842246, rank: 5 },
    { user_name: "Moon0524", wagered: 2676.9107340391306, rank: 6 },
    { user_name: "Soreloser66", wagered: 1944.006615586505, rank: 7 },
    { user_name: "PennyGambl", wagered: 1727.285627521222, rank: 8 },
    { user_name: "milkshake60", wagered: 1661.339965353862, rank: 9 },
    { user_name: "Penisgambl3r1", wagered: 832.8317596519237, rank: 10 },
    { user_name: "Zigma2012", wagered: 659.6834287187198, rank: 11 },
    { user_name: "MumbaiKingMatt", wagered: 562.0929896994203, rank: 12 },
    { user_name: "animalkoks", wagered: 555.3735641925446, rank: 13 },
    { user_name: "Sonusonu7668", wagered: 406.5955254894295, rank: 14 },
    { user_name: "lopld123", wagered: 318.9770600283511, rank: 15 },
    { user_name: "Chengcheng76", wagered: 313.19516102808427, rank: 16 },
    { user_name: "pennyfanboy420", wagered: 250.96817938965503, rank: 17 },
    { user_name: "Mygame12ki", wagered: 200.78036059818004, rank: 18 },
    { user_name: "matrix1930", wagered: 126.2153789845914, rank: 19 },
    { user_name: "PENNYCODE", wagered: 120.63722479320667, rank: 20 }
  ];
  
  // Calculate total wager across all participants
  const totalWager = rawData.reduce((sum, entry) => sum + entry.wagered, 0);
  
  // Transform the data into our LeaderboardEntry format
  return rawData.map(entry => ({
    rank: entry.rank,
    player: entry.user_name,
    initial: entry.user_name.charAt(0),
    wager: entry.wagered,
    wagerFormatted: formatWager(entry.wagered),
    prize: calculatePrize(entry.rank, totalWager),
    rankStyle: getRankStyle(entry.rank)
  }));
}

// Get leaderboard data excluding the top 3 entries (for the table display)
export function getLeaderboardDataExcludingTop3(): LeaderboardEntry[] {
  const allEntries = getLeaderboardData();
  // Filter to include all entries after rank 3
  return allEntries.filter(entry => entry.rank > 3);
}

// Get the top 3 entries for the featured display
export function getTopThreeEntries(): LeaderboardEntry[] {
  const allEntries = getLeaderboardData();
  return allEntries.filter(entry => entry.rank <= 3);
}

// High Multi Chase Rewards data
export const minesRewardsData = [
  { multiplier: "11,314.94x", viewerPrize: "$6", codeUserPrize: "$10" },
  { multiplier: "12,123.15x", viewerPrize: "$6.5", codeUserPrize: "$11" },
  { multiplier: "12,523.5x", viewerPrize: "$6.5", codeUserPrize: "$11" },
  { multiplier: "13,219.25x", viewerPrize: "$7", codeUserPrize: "$12" },
  { multiplier: "23,794.65x", viewerPrize: "$11", codeUserPrize: "$19" },
  { multiplier: "25,047.00x", viewerPrize: "$12.5", codeUserPrize: "$20.5" },
  { multiplier: "36,773.55x", viewerPrize: "$17", codeUserPrize: "$27" },
  { multiplier: "49,031.4x", viewerPrize: "$22", codeUserPrize: "$40" },
  { multiplier: "52,598.7x", viewerPrize: "$25", codeUserPrize: "$46" },
  { multiplier: "56,574.69x", viewerPrize: "$28.5", codeUserPrize: "$50" },
  { multiplier: "59,486.62x", viewerPrize: "$30", codeUserPrize: "$53" },
  { multiplier: "118,973.2x", viewerPrize: "$60", codeUserPrize: "$105" },
  { multiplier: "175,329x", viewerPrize: "$83", codeUserPrize: "$150" },
  { multiplier: "202,254.52x", viewerPrize: "$101.20", codeUserPrize: "$170.75" },
  { multiplier: "294,188.4x", viewerPrize: "$145", codeUserPrize: "$250" },
  { multiplier: "367,735.5x", viewerPrize: "$180", codeUserPrize: "$315" },
  { multiplier: "396,022.85x", viewerPrize: "$197.5", codeUserPrize: "$345" },
  { multiplier: "475,893x", viewerPrize: "$235", codeUserPrize: "$420" },
  { multiplier: "1,070,759.25x", viewerPrize: "$485", codeUserPrize: "$900" },
  { multiplier: "2,022,545.25x", viewerPrize: "$915", codeUserPrize: "$1725" },
  { multiplier: "3,236,072.4x", viewerPrize: "$1600", codeUserPrize: "$2810" },
  { multiplier: "4,412,826x", viewerPrize: "$2165", codeUserPrize: "$3795" },
  { multiplier: "5,148,297x", viewerPrize: "$2545", codeUserPrize: "$4548" },
];