import { motion } from "framer-motion";
import { ChevronRight, Award, Trophy, Gift, CheckCircle2, TrendingUp, Users, Sparkles, Zap } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { getTopThreeEntries, LeaderboardEntry } from "@/data/leaderboard-data";

const Home = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [topThreePlayers, setTopThreePlayers] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    // Get real leaderboard data
    setTopThreePlayers(getTopThreeEntries());
  }, []);

  const targetCounts = {
    count1: 1000,
    count2: 2000,
    count3: 12,
    count4: 98
  };

  useEffect(() => {
    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setCount1(Math.floor(progress * targetCounts.count1));
      setCount2(Math.floor(progress * targetCounts.count2));
      setCount3(Math.floor(progress * targetCounts.count3));
      setCount4(Math.floor(progress * targetCounts.count4));
      
      if (frame === totalFrames) {
        clearInterval(counter);
        setCount1(targetCounts.count1);
        setCount2(targetCounts.count2);
        setCount3(targetCounts.count3);
        setCount4(targetCounts.count4);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/20 rounded-full filter blur-[80px]"></div>
            <div className="absolute bottom-[-5%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full filter blur-[100px]"></div>
            <div className="absolute top-[20%] left-[30%] w-[30%] h-[30%] bg-pink-600/10 rounded-full filter blur-[80px]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                  <span className="text-white">Unlock Exclusive </span>
                  <span className="gradient-text">Rewards</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Use code <span className="font-bold gradient-text">PENNY</span> on Stake.com to access <span className="text-white font-semibold">${count1.toLocaleString()}+</span> in rewards, monthly leaderboards, and VIP benefits.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <a
                    href="https://stake.com/?c=penny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-button inline-flex items-center justify-center px-8 py-4 rounded-lg text-white font-bold shadow-lg shadow-purple-500/20"
                  >
                    Join Now
                    <ChevronRight size={20} className="ml-2" />
                  </a>
                  <Link href="/leaderboard">
                    <div className="glass-button inline-flex items-center justify-center px-8 py-4 rounded-lg text-white font-bold cursor-pointer">
                      View Leaderboard
                    </div>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl opacity-20 rounded-full"></div>
                  <motion.div 
                    className="gradient-border glass-card p-6 md:p-8 rounded-2xl"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex justify-between items-center mb-8">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-bold">PennyPayouts</h3>
                          <p className="text-gray-400 text-sm">VIP Program</p>
                        </div>
                      </div>
                      <div className="bg-white/10 px-3 py-1 rounded-full">
                        <span className="text-xs font-medium">Active</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="glass-card rounded-xl p-4">
                        <p className="text-gray-400 text-sm mb-1">Monthly Prizes</p>
                        <p className="text-2xl font-bold gradient-text">$1,000+</p>
                      </div>
                      <div className="glass-card rounded-xl p-4">
                        <p className="text-gray-400 text-sm mb-1">Community Members</p>
                        <p className="text-2xl font-bold gradient-text">2,000+</p>
                      </div>
                    </div>
                    
                    <div className="glass-card rounded-xl p-4 mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-400 text-sm">Monthly Progress</p>
                        <p className="text-white text-xs font-medium">75%</p>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full">
                        <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-gray-400 text-sm">Next reward drop at <span className="text-white">end of month</span></p>
                      <motion.div 
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <TrendingUp className="w-5 h-5 text-purple-400" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="glass-card p-6 md:p-10 rounded-2xl mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">${count1.toLocaleString()}+</h3>
                  <p className="text-gray-400">Monthly Rewards</p>
                </motion.div>
                
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">{count2}+</h3>
                  <p className="text-gray-400">Community Members</p>
                </motion.div>
                
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">{count3}</h3>
                  <p className="text-gray-400">Monthly Giveaways</p>
                </motion.div>
                
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">{count4}%</h3>
                  <p className="text-gray-400">Satisfaction Rate</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-blue-600/10 rounded-full filter blur-[100px]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Why Use Code </span>
                <span className="gradient-text">PENNY</span>
              </h2>
              <p className="text-lg text-gray-300">
                Experience premium benefits and exclusive rewards when you play on Stake.com using our code.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <BenefitCard
                icon={<Award className="w-8 h-8 text-purple-400" />}
                title="VIP Rewards"
                description="Earn up to $1,000 in bonuses as you progress through VIP tiers."
              />
              <BenefitCard
                icon={<Trophy className="w-8 h-8 text-blue-400" />}
                title="Leaderboard"
                description="Monthly leaderboard with $320+ in base prizes for top players."
                delay={0.1}
              />
              <BenefitCard
                icon={<Gift className="w-8 h-8 text-pink-400" />}
                title="Giveaways"
                description={<>Join daily streams for chances to win <Link href="/stream-rewards"><span className="text-sky-400 hover:underline cursor-pointer">stream rewards</span></Link>.</>}
                delay={0.2}
              />
              <BenefitCard
                icon={<Zap className="w-8 h-8 text-indigo-400" />}
                title="Instant Access"
                description="Get immediate verification and access to all platform features."
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
                <div className="inline-flex items-center justify-center px-6 py-3 rounded-lg gradient-border glass-button text-white font-medium transition cursor-pointer">
                  See All Benefits
                  <ChevronRight size={18} className="ml-2" />
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Leaderboard Preview Section */}
        <section className="py-20 relative">
          <div className="absolute top-[-20%] right-[-5%] w-[30%] h-[40%] bg-blue-600/10 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[30%] bg-purple-600/10 rounded-full filter blur-[120px]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Monthly </span>
                <span className="gradient-text">Leaderboard</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Compete with other players for a share of $320+ in monthly rewards. Top 10 spots receive base prizes.
              </p>
            </motion.div>

            <motion.div 
              className="glass-card rounded-2xl overflow-hidden max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="p-6 border-b border-white/5 bg-white/5">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold flex items-center">
                    <Trophy className="text-purple-400 mr-2" size={20} />
                    Current Leaders
                  </h3>
                  <div className="glass-card px-3 py-1 rounded-full text-sm">
                    <span className="gradient-text font-semibold">12</span> days remaining
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
                      {topThreePlayers.map((player, index) => (
                        <LeaderboardRow 
                          key={player.rank}
                          rank={player.rank} 
                          rankStyle={player.rankStyle}
                          player={player.player} 
                          initial={player.initial} 
                          wager={player.wagerFormatted} 
                          prize={player.prize}
                          delay={0.1 * (index + 1)}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-6 border-t border-white/5 text-center">
                <Link href="/leaderboard">
                  <div className="inline-flex items-center justify-center px-5 py-2 rounded-lg glass-button text-white font-medium cursor-pointer">
                    View Full Leaderboard
                    <ChevronRight size={16} className="ml-2" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute top-[-30%] right-[-10%] w-[50%] h-[60%] bg-gradient-to-b from-purple-600/10 via-blue-500/5 to-transparent skew-x-12 z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="gradient-border glass-card rounded-2xl p-10 md:p-12 relative overflow-hidden max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-[-50%] right-[-10%] w-[40%] h-[300%] bg-gradient-to-b from-purple-500/30 via-blue-500/20 to-transparent skew-x-12 z-0"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Ready to <span className="gradient-text">Claim Your Rewards?</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join Stake.com today and start using code <span className="gradient-text font-bold">PENNY</span> to unlock exclusive benefits, monthly leaderboard prizes, and stream giveaways.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <motion.a
                    href="https://stake.com/?c=penny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-button inline-flex items-center justify-center px-8 py-4 rounded-lg text-white font-bold shadow-lg shadow-purple-500/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Sign Up Now
                    <ChevronRight size={20} className="ml-2" />
                  </motion.a>
                  <Link href="/stream-rewards">
                    <div className="glass-button inline-flex items-center justify-center px-8 py-4 rounded-lg text-white font-bold cursor-pointer">
                      Explore Benefits
                      <ChevronRight size={18} className="ml-2" />
                    </div>
                  </Link>
                </div>
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
  description: React.ReactNode;
  delay?: number;
}

const BenefitCard = ({ icon, title, description, delay = 0 }: BenefitCardProps) => {
  return (
    <motion.div
      className="glass-card-hover rounded-xl p-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="w-14 h-14 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
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
      className="border-b border-white/5"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
    >
      <td className="px-4 py-4">
        <div className={`flex items-center justify-center w-9 h-9 rounded-md ${rankStyle} font-bold shadow-md`}>
          {rank}
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center">
          <div className="w-9 h-9 rounded-full glass-card flex items-center justify-center mr-3">
            <span className="font-bold gradient-text">{initial}</span>
          </div>
          <span className="font-medium">{player}</span>
        </div>
      </td>
      <td className="px-4 py-4 font-medium">{wager}</td>
      <td className="px-4 py-4 gradient-text font-bold">{prize}</td>
    </motion.tr>
  );
};

export default Home;