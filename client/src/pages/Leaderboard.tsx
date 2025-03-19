import { motion } from "framer-motion";
import { Trophy, Crown, Medal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLeaderboardData, getTopThreeEntries, LeaderboardEntry } from "@/data/leaderboard-data";

const Leaderboard = () => {
  const leaderboardData = getLeaderboardData();
  const topThree = getTopThreeEntries();
  
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

          {/* Top 3 Featured Cards */}
          <div className="mb-16">
            <motion.div 
              className="grid grid-cols-9 gap-4 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Second Place - Left */}
              <motion.div 
                className="col-span-9 md:col-span-3 flex flex-col justify-end"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="h-8 md:h-12 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-black font-bold text-lg shadow-md">
                    2
                  </div>
                </div>
                <div className="bg-black/30 rounded-xl overflow-hidden border border-gray-600 shadow-lg p-4 md:p-6 text-center h-full">
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-sky-900/30 flex items-center justify-center">
                      <Medal className="w-6 h-6 text-gray-300" />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b from-gray-800 to-black rounded-lg p-2 mb-3">
                    <img src="https://pennypts.com/leaderboard/images/stake.webp" alt="Stake Logo" className="h-8 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{topThree[1]?.player}</h3>
                  <p className="text-gray-400 my-1">{topThree[1]?.wagerFormatted}</p>
                  <p className="text-lg font-semibold text-sky-400 mt-2">🎁 {topThree[1]?.prize}</p>
                </div>
              </motion.div>

              {/* First Place - Middle */}
              <motion.div 
                className="col-span-9 md:col-span-3 md:-mt-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="h-8 md:h-16 flex justify-center relative">
                  <div className="absolute top-0">
                    <Crown className="w-10 h-10 text-yellow-400 mb-1" />
                  </div>
                  <div className="absolute top-6 w-12 h-12 rounded-full bg-sky-400 flex items-center justify-center text-black font-bold text-xl shadow-xl">
                    1
                  </div>
                </div>
                <div className="bg-gradient-to-b from-sky-950/50 to-black/70 rounded-xl overflow-hidden border border-sky-700 shadow-xl p-4 md:p-6 text-center">
                  <div className="flex justify-center mb-2">
                    <div className="w-16 h-16 rounded-full bg-sky-900/30 flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-yellow-400" />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b from-gray-800 to-black rounded-lg p-2 mb-3">
                    <img src="https://pennypts.com/leaderboard/images/stake.webp" alt="Stake Logo" className="h-10 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{topThree[0]?.player}</h3>
                  <p className="text-gray-400 my-1">{topThree[0]?.wagerFormatted}</p>
                  <p className="text-xl font-semibold text-sky-400 mt-2">🎁 {topThree[0]?.prize}</p>
                </div>
              </motion.div>

              {/* Third Place - Right */}
              <motion.div 
                className="col-span-9 md:col-span-3 flex flex-col justify-end"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="h-8 md:h-12 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-black font-bold text-lg shadow-md">
                    3
                  </div>
                </div>
                <div className="bg-black/30 rounded-xl overflow-hidden border border-amber-900/30 shadow-lg p-4 md:p-6 text-center h-full">
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-sky-900/30 flex items-center justify-center">
                      <Medal className="w-6 h-6 text-amber-400" />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b from-gray-800 to-black rounded-lg p-2 mb-3">
                    <img src="https://pennypts.com/leaderboard/images/stake.webp" alt="Stake Logo" className="h-8 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{topThree[2]?.player}</h3>
                  <p className="text-gray-400 my-1">{topThree[2]?.wagerFormatted}</p>
                  <p className="text-lg font-semibold text-sky-400 mt-2">🎁 {topThree[2]?.prize}</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="text-center text-gray-500 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p>Multi accounting or wager methods will result in loss of reward</p>
            </motion.div>
          </div>

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
                        {leaderboardData.map((player: LeaderboardEntry, index: number) => (
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
                            <td className="px-4 py-4 font-medium">{player.wagerFormatted}</td>
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
                    <div className="mt-2 space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>Under $75,000 wagered</span>
                        <span>Base prize</span>
                      </div>
                      <div className="flex justify-between text-sky-300">
                        <span>$75,000 wagered</span>
                        <span>+6.25%</span>
                      </div>
                      <div className="flex justify-between text-sky-300">
                        <span>$150,000 wagered</span>
                        <span>+12.5%</span>
                      </div>
                      <div className="flex justify-between text-sky-300">
                        <span>$225,000 wagered</span>
                        <span>+18.75%</span>
                      </div>
                      <div className="flex justify-between text-sky-300">
                        <span>$300,000 wagered</span>
                        <span>+25%</span>
                      </div>
                    </div>
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
                      href="https://stake.com/?c=penny"
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