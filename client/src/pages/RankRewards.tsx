import { motion } from "framer-motion";
import { Award, Trophy, ChevronRight, Star, Users, Gift } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RankBenefitsTable from "@/components/RankBenefitsTable";

const RankRewards = () => {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-slate-900 to-black">
        {/* Hero Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Rank </span>
                <span className="text-sky-400">Rewards</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                Exclusive benefits based on your loyalty rank when using code PENNY on Stake.com
              </p>
            </motion.div>

            {/* Rank Table */}
            <motion.div 
              className="max-w-5xl mx-auto bg-black/30 rounded-xl overflow-hidden border border-sky-900/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="p-6 border-b border-sky-900/20 bg-black/50">
                <h3 className="text-xl font-semibold flex items-center">
                  <Award className="text-sky-400 mr-2" size={24} />
                  PENNY Code Rank Benefits
                </h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-sky-900/20 text-left">
                      <th className="px-6 py-4 text-white">Rank</th>
                      <th className="px-6 py-4 text-white">Bronze</th>
                      <th className="px-6 py-4 text-white">Silver</th>
                      <th className="px-6 py-4 text-white">Gold</th>
                      <th className="px-6 py-4 text-white">Platinum</th>
                      <th className="px-6 py-4 text-white">Diamond</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-sky-900/10">
                      <td className="px-6 py-4 font-medium text-sky-400">Rakeback</td>
                      <td className="px-6 py-4">5%</td>
                      <td className="px-6 py-4">7%</td>
                      <td className="px-6 py-4">10%</td>
                      <td className="px-6 py-4">12.5%</td>
                      <td className="px-6 py-4">15%</td>
                    </tr>
                    <tr className="border-b border-sky-900/10 bg-black/20">
                      <td className="px-6 py-4 font-medium text-sky-400">Weekly Bonus</td>
                      <td className="px-6 py-4">$5</td>
                      <td className="px-6 py-4">$10</td>
                      <td className="px-6 py-4">$25</td>
                      <td className="px-6 py-4">$50</td>
                      <td className="px-6 py-4">$100</td>
                    </tr>
                    <tr className="border-b border-sky-900/10">
                      <td className="px-6 py-4 font-medium text-sky-400">Monthly Reload</td>
                      <td className="px-6 py-4">10%</td>
                      <td className="px-6 py-4">25%</td>
                      <td className="px-6 py-4">50%</td>
                      <td className="px-6 py-4">75%</td>
                      <td className="px-6 py-4">100%</td>
                    </tr>
                    <tr className="border-b border-sky-900/10 bg-black/20">
                      <td className="px-6 py-4 font-medium text-sky-400">Giveaway Entries</td>
                      <td className="px-6 py-4">1x</td>
                      <td className="px-6 py-4">2x</td>
                      <td className="px-6 py-4">3x</td>
                      <td className="px-6 py-4">5x</td>
                      <td className="px-6 py-4">10x</td>
                    </tr>
                    <tr className="border-b border-sky-900/10">
                      <td className="px-6 py-4 font-medium text-sky-400">Stream Rewards</td>
                      <td className="px-6 py-4">+5%</td>
                      <td className="px-6 py-4">+15%</td>
                      <td className="px-6 py-4">+30%</td>
                      <td className="px-6 py-4">+50%</td>
                      <td className="px-6 py-4">+70%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Rank Benefits Table */}
        <section className="py-16 bg-gradient-to-b from-black/50 to-black/80">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">Wager-Based </span>
                <span className="text-sky-400">Rank Up Benefits</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Earn exclusive rewards at different wager milestones using code PENNY
              </p>
            </motion.div>
            
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <RankBenefitsTable />
            </motion.div>
          </div>
        </section>

        {/* Benefits Explanation */}
        <section className="py-16 bg-black/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">Benefits </span>
                <span className="text-sky-400">Explained</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Detailed breakdown of each benefit you receive when using code PENNY
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div 
                className="bg-black/30 rounded-xl overflow-hidden border border-sky-900/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="p-6 border-b border-sky-900/20">
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="w-8 h-8 rounded-full bg-sky-900/30 flex items-center justify-center mr-2 text-sky-400">
                      <Gift size={16} />
                    </span>
                    Rakeback
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">
                    Receive automatic cashback on your wagers, reducing your overall risk. Higher ranks earn significantly more rakeback.
                  </p>
                  <div className="text-sm text-sky-400">
                    Automatically credited to your account
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-black/30 rounded-xl overflow-hidden border border-sky-900/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6 border-b border-sky-900/20">
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="w-8 h-8 rounded-full bg-sky-900/30 flex items-center justify-center mr-2 text-sky-400">
                      <Star size={16} />
                    </span>
                    Weekly Bonus
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">
                    Receive a guaranteed weekly bonus based on your rank level. These bonuses are awarded every Monday.
                  </p>
                  <div className="text-sm text-sky-400">
                    Must maintain active status to receive
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-black/30 rounded-xl overflow-hidden border border-sky-900/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="p-6 border-b border-sky-900/20">
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="w-8 h-8 rounded-full bg-sky-900/30 flex items-center justify-center mr-2 text-sky-400">
                      <Trophy size={16} />
                    </span>
                    Monthly Reload
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">
                    Once per month, receive a reload bonus on your deposit at the specified percentage rate based on your rank level.
                  </p>
                  <div className="text-sm text-sky-400">
                    Contact support to claim your reload
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-black/30 rounded-xl overflow-hidden border border-sky-900/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="p-6 border-b border-sky-900/20">
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="w-8 h-8 rounded-full bg-sky-900/30 flex items-center justify-center mr-2 text-sky-400">
                      <Users size={16} />
                    </span>
                    Giveaway Entries
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">
                    Multiply your chances of winning in our regular giveaways. Higher ranks receive significantly more entries.
                  </p>
                  <div className="text-sm text-sky-400">
                    Applied automatically in all giveaways
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-black/30 rounded-xl overflow-hidden border border-sky-900/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="p-6 border-b border-sky-900/20">
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="w-8 h-8 rounded-full bg-sky-900/30 flex items-center justify-center mr-2 text-sky-400">
                      <Award size={16} />
                    </span>
                    Stream Rewards
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">
                    Enhanced rewards during live streams. Diamond rank users receive 70% more than standard rewards during streams.
                  </p>
                  <div className="text-sm text-sky-400">
                    <Link href="/stream-rewards">
                      <a className="hover:underline">
                        View stream schedule
                      </a>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How to Qualify */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto p-10 rounded-2xl bg-gradient-to-r from-sky-900/20 to-blue-900/20 border border-sky-900/30 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="text-sky-400">Get Started?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Sign up on Stake.com with code PENNY today and start earning rank benefits immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://stake.com/?c=penny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium hover:opacity-90 transition"
                >
                  Join with code PENNY
                  <ChevronRight size={18} className="ml-1" />
                </a>
                <Link href="/stream-rewards">
                  <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/15 transition">
                    View Stream Rewards
                  </a>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RankRewards;