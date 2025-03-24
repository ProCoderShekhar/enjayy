import { motion } from "framer-motion";
import { getLeaderboardData, LeaderboardEntry } from "@/data/leaderboard-data";
import MonthlyTimer from "./MonthlyTimer";

const LeaderboardSection = () => {
  // Get the top 5 entries from the leaderboard data
  const leaderboardData = getLeaderboardData().slice(0, 5);
  
  // Get the current date for display
  const currentDate = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();
  
  return (
    <section id="leaderboard" className="py-20 bg-gradient-to-b from-dark-purple/20 to-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Monthly <span className="text-secondary">Leaderboard</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Compete against other players for your share of our monthly prize pool - with rewards increasing based on total wager.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-dark-purple/10 rounded-xl overflow-hidden border border-primary/30">
              <div className="p-6 border-b border-primary/20 bg-primary/10">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{currentMonth} {currentYear} Leaderboard</h3>
                  <div className="text-right">
                    <MonthlyTimer />
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
                          className="border-b border-primary/10"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                        >
                          <td className="px-4 py-4">
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${player.rankStyle} font-bold`}>
                              {player.rank}
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center mr-3">
                                <span className="font-bold">{player.initial}</span>
                              </div>
                              <span>{player.player}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4 font-medium">{player.wagerFormatted}</td>
                          <td className="px-4 py-4 text-secondary font-semibold">{player.prize}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 text-center">
                  <a 
                    href="/leaderboard" 
                    className="inline-block text-sm text-secondary hover:text-secondary/80 font-medium"
                  >
                    View Full Leaderboard
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-dark-purple/10 rounded-xl overflow-hidden border border-primary/30 h-full">
              <div className="p-6 border-b border-primary/20 bg-primary/10">
                <h3 className="text-xl font-semibold">Leaderboard Details</h3>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-secondary font-semibold mb-2">Prize Pool</h4>
                  <p className="text-gray-300 text-sm">
                    Minimum $320 in prizes for top 10 participants every month.
                  </p>
                </div>

                <div>
                  <h4 className="text-secondary font-semibold mb-2">Increased Rewards</h4>
                  <p className="text-gray-300 text-sm">
                    Leaderboard rewards increase by 6.25% for every $75,000 wagered (up to 25% max).
                  </p>
                </div>

                <div>
                  <h4 className="text-secondary font-semibold mb-2">Eligibility</h4>
                  <p className="text-gray-300 text-sm">
                    Must be using code PENNY on Stake.com to qualify for leaderboard rewards.
                  </p>
                </div>

                <div>
                  <h4 className="text-secondary font-semibold mb-2">Payout Schedule</h4>
                  <p className="text-gray-300 text-sm">
                    Rewards are distributed within 48 hours after the end of each month.
                  </p>
                </div>

                <div className="pt-4">
                  <a 
                    href="https://stake.com/?c=penny" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full py-3 rounded-lg bg-secondary text-dark font-medium hover:bg-secondary/90 transition text-center"
                  >
                    Join Leaderboard
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
