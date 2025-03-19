import { motion } from "framer-motion";
import { ChevronRight, Award, Trophy, Gift, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-black pt-28 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-white">Unlock Exclusive </span>
                  <span className="text-sky-400">Rewards</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Use code <span className="font-bold text-sky-400">PENNY</span> on Stake.com to access $22,500+ in rewards, monthly leaderboards, and VIP benefits.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://stake.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium hover:opacity-90 transition"
                  >
                    Join Now
                    <ChevronRight size={18} className="ml-1" />
                  </a>
                  <Link href="/leaderboard">
                    <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/15 transition">
                      View Leaderboard
                    </a>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-xl overflow-hidden border border-sky-900/30 bg-black/30 shadow-xl">
                  <div className="p-6 border-b border-sky-900/20 bg-black/50">
                    <h3 className="text-xl font-semibold flex items-center">
                      <Award className="text-sky-400 mr-2" size={24} />
                      Monthly Reward Highlights
                    </h3>
                  </div>
                  <div className="p-6 space-y-5">
                    <RewardItem 
                      icon={<Trophy className="text-amber-400" size={22} />}
                      title="$320+ Monthly Leaderboard"
                      description="Top 10 rankings with guaranteed prizes. Rewards grow as total wager increases."
                    />
                    <RewardItem 
                      icon={<Gift className="text-rose-400" size={22} />}
                      title="Stream Giveaways"
                      description="$1,500+ in weekly stream giveaways with chance to win up to $500 per stream."
                    />
                    <RewardItem 
                      icon={<CheckCircle2 className="text-emerald-400" size={22} />}
                      title="VIP Benefits"
                      description="Earn up to $22,500 in rank-up bonuses plus weekly and monthly boost rewards."
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-black to-slate-950">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">Why Choose Code </span>
                <span className="text-sky-400">PENNY</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Maximize your gambling experience with exclusive benefits designed to reward loyal players.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BenefitCard
                icon={<Award size={26} />}
                title="Rank-Up Rewards"
                description="Earn up to $22,500 in bonuses as you progress through VIP tiers. Climb the ranks faster with dedicated support."
                delay={0.1}
              />
              <BenefitCard
                icon={<Trophy size={26} />}
                title="Competitive Leaderboard"
                description="Monthly leaderboard with $320+ in guaranteed prizes for top 10 participants. Prize pool increases with total wager."
                delay={0.2}
              />
              <BenefitCard
                icon={<Gift size={26} />}
                title="Stream Giveaways"
                description="Join weekly streams with $1,500+ in giveaways. Multiple winners every stream with chances to win up to $500."
                delay={0.3}
              />
            </div>

            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/stream-rewards">
                <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium hover:opacity-90 transition">
                  See All Benefits
                  <ChevronRight size={18} className="ml-1" />
                </a>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Leaderboard Preview Section */}
        <section className="py-20 bg-gradient-to-b from-slate-950 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">Monthly </span>
                <span className="text-sky-400">Leaderboard</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Compete with other players for a share of $320+ in monthly rewards. Top 10 spots receive guaranteed prizes.
              </p>
            </motion.div>

            <div className="bg-black/30 rounded-xl overflow-hidden border border-sky-900/30 max-w-4xl mx-auto">
              <div className="p-6 border-b border-sky-900/20 bg-black/50">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Current Leaders</h3>
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
                      {/* Top 3 leaderboard entries */}
                      <LeaderboardRow 
                        rank={1} 
                        rankStyle="bg-sky-400 text-black" 
                        player="JackpotKing" 
                        initial="J" 
                        wager="$143,250" 
                        prize="$100"
                        delay={0.1}
                      />
                      <LeaderboardRow 
                        rank={2} 
                        rankStyle="bg-gray-300 text-black" 
                        player="SpinMaster" 
                        initial="S" 
                        wager="$98,750" 
                        prize="$75"
                        delay={0.2}
                      />
                      <LeaderboardRow 
                        rank={3} 
                        rankStyle="bg-amber-600 text-black" 
                        player="VegasRoller" 
                        initial="V" 
                        wager="$76,320" 
                        prize="$50"
                        delay={0.3}
                      />
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-6 border-t border-sky-900/20 bg-black/20 text-center">
                <Link href="/leaderboard">
                  <a className="inline-flex items-center justify-center px-5 py-2 text-sm rounded-lg bg-sky-900/40 text-sky-400 font-medium hover:bg-sky-900/60 transition">
                    View Full Leaderboard
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-black to-slate-950">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto p-10 rounded-2xl bg-gradient-to-r from-sky-900/20 to-blue-900/20 border border-sky-900/30 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="text-sky-400">Claim Your Rewards?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join Stake.com today and start using code PENNY to unlock exclusive benefits, monthly leaderboard prizes, and stream giveaways.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://stake.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium hover:opacity-90 transition"
                >
                  Sign Up Now
                  <ChevronRight size={18} className="ml-1" />
                </a>
                <Link href="/stream-rewards">
                  <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/15 transition">
                    Explore Benefits
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

interface RewardItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const RewardItem = ({ icon, title, description }: RewardItemProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-900/30 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const BenefitCard = ({ icon, title, description, delay = 0 }: BenefitCardProps) => {
  return (
    <motion.div
      className="bg-black/30 rounded-xl border border-sky-900/30 p-6 hover:bg-sky-900/10 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="w-12 h-12 rounded-full bg-sky-900/30 flex items-center justify-center mb-4 text-sky-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

interface LeaderboardRowProps {
  rank: number;
  rankStyle: string;
  player: string;
  initial: string;
  wager: string;
  prize: string;
  delay?: number;
}

const LeaderboardRow = ({ rank, rankStyle, player, initial, wager, prize, delay = 0 }: LeaderboardRowProps) => {
  return (
    <motion.tr 
      className="border-b border-sky-900/10"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      viewport={{ once: true }}
    >
      <td className="px-4 py-4">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${rankStyle} font-bold`}>
          {rank}
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-sky-900/30 flex items-center justify-center mr-3">
            <span className="font-bold">{initial}</span>
          </div>
          <span>{player}</span>
        </div>
      </td>
      <td className="px-4 py-4 font-medium">{wager}</td>
      <td className="px-4 py-4 text-sky-400 font-semibold">{prize}</td>
    </motion.tr>
  );
};

export default Home;