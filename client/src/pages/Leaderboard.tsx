import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const leaderboardData = [
  {
    rank: 1,
    rankStyle: "bg-sky-400 text-dark",
    player: "JackpotKing",
    initial: "J",
    wager: "$143,250",
    prize: "$100",
  },
  {
    rank: 2,
    rankStyle: "bg-gray-300 text-dark",
    player: "SpinMaster",
    initial: "S",
    wager: "$98,750",
    prize: "$75",
  },
  {
    rank: 3,
    rankStyle: "bg-amber-600 text-dark",
    player: "VegasRoller",
    initial: "V",
    wager: "$76,320",
    prize: "$50",
  },
  {
    rank: 4,
    rankStyle: "bg-gray-800 text-gray-300",
    player: "LuckySpinner",
    initial: "L",
    wager: "$59,450",
    prize: "$30",
  },
  {
    rank: 5,
    rankStyle: "bg-gray-800 text-gray-300",
    player: "BetMaster",
    initial: "B",
    wager: "$41,200",
    prize: "$25",
  },
  {
    rank: 6,
    rankStyle: "bg-gray-800 text-gray-300",
    player: "SlotChamp",
    initial: "S",
    wager: "$35,740",
    prize: "$15",
  },
  {
    rank: 7,
    rankStyle: "bg-gray-800 text-gray-300",
    player: "GambleKing",
    initial: "G",
    wager: "$28,450",
    prize: "$10",
  },
  {
    rank: 8,
    rankStyle: "bg-gray-800 text-gray-300",
    player: "BetHunter",
    initial: "B",
    wager: "$22,300",
    prize: "$5",
  },
  {
    rank: 9,
    rankStyle: "bg-gray-800 text-gray-300",
    player: "CasinoRoyal",
    initial: "C",
    wager: "$18,900",
    prize: "$5",
  },
  {
    rank: 10,
    rankStyle: "bg-gray-800 text-gray-300",
    player: "LuckyDice",
    initial: "L",
    wager: "$15,625",
    prize: "$5",
  },
];

const Leaderboard = () => {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-slate-900 to-black">
        <div className="container mx-auto px-4 py-10">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Monthly </span>
              <span className="text-sky-400">Leaderboard</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Compete against other players for your share of our monthly prize pool - with rewards increasing based on total wager.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-black/30 rounded-xl overflow-hidden border border-sky-900/30">
                <div className="p-6 border-b border-sky-900/20 bg-black/50">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Current Monthly Leaderboard</h3>
                    <div className="text-sm text-gray-400">
                      <span className="text-sky-400 font-semibold">12</span> days remaining
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="overflow-x-auto scrollbar-hide">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-gray-400 text-sm">
                          <th className="px-4 py-3">Rank</th>
                          <th className="px-4 py-3">Player</th>
                          <th className="px-4 py-3">Wager</th>
                          <th className="px-4 py-3">Prize</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaderboardData.map((player, index) => (
                          <motion.tr 
                            key={index} 
                            className="border-b border-sky-900/10"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                          >
                            <td className="px-4 py-4">
                              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${player.rankStyle} font-bold`}>
                                {player.rank}
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-sky-900/30 flex items-center justify-center mr-3">
                                  <span className="font-bold">{player.initial}</span>
                                </div>
                                <span>{player.player}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4 font-medium">{player.wager}</td>
                            <td className="px-4 py-4 text-sky-400 font-semibold">{player.prize}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-black/30 rounded-xl overflow-hidden border border-sky-900/30 h-full">
                <div className="p-6 border-b border-sky-900/20 bg-black/50">
                  <h3 className="text-xl font-semibold">Leaderboard Details</h3>
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-sky-400 font-semibold mb-2">Prize Pool</h4>
                    <p className="text-gray-300 text-sm">
                      Minimum $320 in prizes for top 10 participants every month.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sky-400 font-semibold mb-2">Increased Rewards</h4>
                    <p className="text-gray-300 text-sm">
                      Leaderboard rewards increase by 6.25% for every $75,000 wagered (up to 25% max).
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sky-400 font-semibold mb-2">Eligibility</h4>
                    <p className="text-gray-300 text-sm">
                      Must be using code PENNY on Stake.com to qualify for leaderboard rewards.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sky-400 font-semibold mb-2">Payout Schedule</h4>
                    <p className="text-gray-300 text-sm">
                      Rewards are distributed within 48 hours after the end of each month.
                    </p>
                  </div>

                  <div className="pt-4">
                    <a 
                      href="https://stake.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white text-center font-medium hover:opacity-90 transition"
                    >
                      Join Leaderboard
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Leaderboard;