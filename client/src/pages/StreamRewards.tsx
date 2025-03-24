import { motion } from "framer-motion";
import { ChevronRight, Gift, Trophy, Users, Star, Flame, Calendar, Clock, Award, Sparkles } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StreamMultiRewards from "@/components/StreamMultiRewards";

const StreamRewards = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 to-black">
        {/* Hero Section */}
        <section className="pt-28 pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Stream </span>
                <span className="text-sky-400">Rewards</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our daily live streams for exclusive giveaways and rewards over 70% boosted for code PENNY users.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <StreamInfoCard 
                title="Daily Streams"
                icon={<Calendar className="text-sky-400" size={24} />}
                description="Join us daily for live giveaways, gambling sessions, and exclusive rewards. Check schedule for exact times."
                buttonText="Subscribe"
                buttonLink="https://www.twitch.tv/imenjayy"
                delay={0.1}
              />
              <StreamInfoCard 
                title="Multiple Winners"
                icon={<Users className="text-sky-400" size={24} />}
                description="Each stream features multiple giveaways with up to 20 winners. More activity means more chances to win."
                buttonText="Learn More"
                buttonLink="#stream-rewards-details"
                delay={0.2}
              />
              <StreamInfoCard 
                title="Easy Participation"
                icon={<Star className="text-sky-400" size={24} />}
                description="Simply use code PENNY, join the stream, and follow instructions to enter giveaways. No purchase necessary."
                buttonText="Get Started"
                buttonLink="https://stake.com/?c=penny"
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* High Multi Chase Rewards Section */}
        <section className="py-20 bg-black/30" id="high-multi-rewards">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">Mines Multiplier </span>
                <span className="text-sky-400">Hunt</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                The Hunt to Hit EVERY Mines Multiplier on Stake! Every Hit on Stream will Result in Rewards for the Chat.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto mb-10">
              <StreamMultiRewards />
            </div>
            
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center text-gray-400 bg-black/40 rounded-full px-4 py-2">
                <Sparkles size={16} className="text-amber-400 mr-2" />
                <span className="text-sm">PENNY code users receive higher rewards for the same multipliers</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-20 bg-gradient-to-b from-black/10 to-black/40" id="connect-section">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">Connect With </span>
                <span className="text-sky-400">Us</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Follow our channels for stream announcements, giveaways, and rewards.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto bg-slate-900/50 border border-sky-900/30 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white mb-4">Social Channels</h3>
                  
                  <div className="space-y-3 text-gray-300">
                    <a href="http://kick.com/enjayy" target="_blank" rel="noopener noreferrer" 
                      className="flex items-center gap-3 p-3 bg-black/30 hover:bg-black/50 rounded-lg transition">
                      <div className="w-10 h-10 rounded-full bg-[#53fc18]/20 flex items-center justify-center text-[#53fc18]">
                        K
                      </div>
                      <div>
                        <div className="font-medium">Kick</div>
                        <div className="text-sm text-gray-400">kick.com/enjayy</div>
                      </div>
                    </a>
                    
                    <a href="https://discord.gg/enjayy" target="_blank" rel="noopener noreferrer" 
                      className="flex items-center gap-3 p-3 bg-black/30 hover:bg-black/50 rounded-lg transition">
                      <div className="w-10 h-10 rounded-full bg-[#5865F2]/20 flex items-center justify-center text-[#5865F2]">
                        D
                      </div>
                      <div>
                        <div className="font-medium">Discord</div>
                        <div className="text-sm text-gray-400">discord.gg/enjayy</div>
                      </div>
                    </a>
                    
                    <a href="https://www.youtube.com/@EnjayyLive" target="_blank" rel="noopener noreferrer" 
                      className="flex items-center gap-3 p-3 bg-black/30 hover:bg-black/50 rounded-lg transition">
                      <div className="w-10 h-10 rounded-full bg-[#FF0000]/20 flex items-center justify-center text-[#FF0000]">
                        Y
                      </div>
                      <div>
                        <div className="font-medium">YouTube</div>
                        <div className="text-sm text-gray-400">@EnjayyLive (Backup Channel)</div>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white mb-4">More Platforms</h3>
                  
                  <div className="space-y-3 text-gray-300">
                    <a href="https://x.com/imEnjayy" target="_blank" rel="noopener noreferrer" 
                      className="flex items-center gap-3 p-3 bg-black/30 hover:bg-black/50 rounded-lg transition">
                      <div className="w-10 h-10 rounded-full bg-[#1DA1F2]/20 flex items-center justify-center text-[#1DA1F2]">
                        X
                      </div>
                      <div>
                        <div className="font-medium">X (Twitter)</div>
                        <div className="text-sm text-gray-400">@imEnjayy</div>
                      </div>
                    </a>
                    
                    <a href="https://instagram.com/imenjayy" target="_blank" rel="noopener noreferrer" 
                      className="flex items-center gap-3 p-3 bg-black/30 hover:bg-black/50 rounded-lg transition">
                      <div className="w-10 h-10 rounded-full bg-[#E4405F]/20 flex items-center justify-center text-[#E4405F]">
                        I
                      </div>
                      <div>
                        <div className="font-medium">Instagram</div>
                        <div className="text-sm text-gray-400">@imenjayy</div>
                      </div>
                    </a>
                    
                    <a href="https://www.twitch.tv/imenjayy" target="_blank" rel="noopener noreferrer" 
                      className="flex items-center gap-3 p-3 bg-black/30 hover:bg-black/50 rounded-lg transition">
                      <div className="w-10 h-10 rounded-full bg-[#9146FF]/20 flex items-center justify-center text-[#9146FF]">
                        T
                      </div>
                      <div>
                        <div className="font-medium">Twitch</div>
                        <div className="text-sm text-gray-400">imenjayy</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-sky-950/30 rounded-lg border border-sky-900/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-500">
                    ?
                  </div>
                  <div>
                    <div className="font-medium">Need Support?</div>
                    <div className="text-sm text-gray-400">Join our <a href="https://discord.gg/enjayy" className="text-sky-400 hover:underline">Discord</a> for fastest support and answers to your questions.</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.twitch.tv/imenjayy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium hover:opacity-90 transition"
                >
                  <div className="w-5 h-5 mr-2 flex items-center justify-center text-white">
                    T
                  </div>
                  Join on Twitch
                  <ChevronRight size={18} className="ml-1" />
                </a>
                <a
                  href="http://kick.com/enjayy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-700 text-white font-medium hover:opacity-90 transition"
                >
                  <div className="w-5 h-5 mr-2 flex items-center justify-center text-white">
                    K
                  </div>
                  Join on Kick
                  <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-black/30 rounded-xl overflow-hidden border border-sky-900/30 max-w-5xl mx-auto">
              <div className="p-6 border-b border-sky-900/20 bg-black/50">
                <h3 className="text-xl font-semibold flex items-center">
                  <Gift className="text-sky-400 mr-2" size={24} />
                  Stream Rewards Eligibility
                </h3>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-semibold mb-4 text-white">How to Qualify</h4>
                    <ul className="space-y-3">
                      {[
                        "Use code PENNY on Stake.com",
                        "Join stream during scheduled times",
                        "Follow entry instructions provided during stream",
                        "Be present to claim your prize if selected"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-sky-900/50 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-sky-400 text-xs font-bold">{index + 1}</span>
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-semibold mb-4 text-white">Additional Benefits</h4>
                    <ul className="space-y-3">
                      {[
                        "Priority entry into larger giveaways",
                        "Exclusive subscriber-only giveaways",
                        "Loyalty points for consistent participation",
                        "Special monthly bonus draws for regular viewers"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="text-sky-400 mr-3 flex-shrink-0">
                            <ChevronRight size={18} />
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <motion.div 
                  className="mt-10 pt-6 border-t border-sky-900/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-400 text-sm">
                    <span className="text-sky-400 font-semibold">Note:</span> All giveaways are at the discretion of the host. 
                    Prizes are typically distributed within 24 hours after the stream ends. 
                    Make sure your Stake.com username is correctly entered when participating in giveaways.
                  </p>
                </motion.div>
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
                Ready to <span className="text-sky-400">Join the Stream?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Sign up on Stake.com with code PENNY today and join our next stream to start winning exclusive rewards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://stake.com/?c=penny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium hover:opacity-90 transition"
                >
                  Join Stake.com
                  <ChevronRight size={18} className="ml-1" />
                </a>
                <Link href="/leaderboard">
                  <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/15 transition">
                    View Leaderboard
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

interface StreamInfoCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  buttonText: string;
  buttonLink: string;
  delay?: number;
}

const StreamInfoCard = ({ title, icon, description, buttonText, buttonLink, delay = 0 }: StreamInfoCardProps) => {
  return (
    <motion.div
      className="bg-black/30 rounded-xl overflow-hidden border border-sky-900/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="p-6 border-b border-sky-900/20">
        <h3 className="text-xl font-semibold flex items-center">
          <span className="mr-2">{icon}</span>
          {title}
        </h3>
      </div>
      <div className="p-6">
        <p className="text-gray-300 mb-6">{description}</p>
        <a
          href={buttonLink}
          target={buttonLink.startsWith("http") ? "_blank" : undefined}
          rel={buttonLink.startsWith("http") ? "noopener noreferrer" : undefined}
          className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-sky-900/30 text-sky-400 font-medium hover:bg-sky-900/50 transition"
        >
          {buttonText}
          <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

interface GiveawayCardProps {
  title: string;
  icon: React.ReactNode;
  amount: string;
  description: string;
  timeInfo: string;
  delay?: number;
}

const GiveawayCard = ({ title, icon, amount, description, timeInfo, delay = 0 }: GiveawayCardProps) => {
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
      <h3 className="text-xl font-semibold mb-1 text-white">{title}</h3>
      <div className="text-2xl font-bold text-sky-400 mb-3">{amount}</div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex items-center text-sm text-gray-500">
        <Clock size={14} className="mr-1" />
        {timeInfo}
      </div>
    </motion.div>
  );
};

export default StreamRewards;