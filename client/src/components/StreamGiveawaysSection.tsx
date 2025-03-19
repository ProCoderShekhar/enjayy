import { motion } from "framer-motion";

const multiplierRewards = [
  {
    multiplier: "5x",
    title: "5x Multiplier Hit",
    reward: "$5 tip to random viewer",
  },
  {
    multiplier: "10x",
    title: "10x Multiplier Hit",
    reward: "$10 tip to random viewer",
  },
  {
    multiplier: "100x",
    title: "100x+ Multiplier Hit",
    reward: "$25 tip to random viewer + $10 bonus for PENNY users",
  },
  {
    icon: "fas fa-calendar-alt",
    title: "Stream Schedule",
    reward: "Monday, Wednesday, Friday at 8PM EST",
  },
];

const StreamGiveawaysSection = () => {
  return (
    <section id="stream" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-dark"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Stream <span className="text-secondary">Giveaways</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch our streams for exclusive giveaways and rewards only available to PENNY code users.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-5xl mx-auto bg-dark-purple/10 rounded-xl overflow-hidden border border-primary/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-10 flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <div className="aspect-video bg-black rounded-lg relative overflow-hidden border border-primary/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.i 
                      className="fas fa-play-circle text-6xl text-secondary/80 mb-4"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    ></motion.i>
                    <p className="text-gray-400">Stream preview unavailable</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/50 flex items-center justify-center mr-3">
                      <i className="fas fa-tv text-secondary"></i>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">PennyGaming</p>
                      <p className="text-xs text-gray-400">Live Now</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <button className="px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-white text-sm font-medium transition">
                  <i className="fas fa-bell mr-1"></i> Get Notified
                </button>

                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition"
                  >
                    <i className="fab fa-twitch text-purple-400"></i>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition"
                  >
                    <i className="fab fa-youtube text-red-500"></i>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition"
                  >
                    <i className="fab fa-discord text-blue-400"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Multi Win Reward System</h3>
              <p className="text-gray-300 mb-6">
                Our unique Multi Win system offers special rewards during streams when big multipliers hit!
              </p>

              <div className="space-y-4">
                {multiplierRewards.map((reward, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-dark rounded-lg p-4 border border-primary/20"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3 text-dark font-bold">
                        {reward.multiplier || <i className={reward.icon}></i>}
                      </div>
                      <div>
                        <p className="font-medium">{reward.title}</p>
                        <p className="text-sm text-gray-400">{reward.reward}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StreamGiveawaysSection;
