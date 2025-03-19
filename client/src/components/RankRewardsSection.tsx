import { motion } from "framer-motion";

const rankCards = [
  {
    title: "Bronze Rank",
    icon: "fas fa-star",
    iconColor: "#CD7F32",
    iconCount: 2,
    wagerRequirement: "$10,000",
    progressPercentage: 20,
    rewards: [
      "2 Exclusive Rewards",
      "$17.5 Total Value",
      "Leaderboard Access"
    ],
    isPopular: false
  },
  {
    title: "Silver Rank",
    icon: "fas fa-star",
    iconColor: "#C0C0C0",
    iconCount: 3,
    wagerRequirement: "$50,000",
    progressPercentage: 40,
    rewards: [
      "5 Exclusive Rewards",
      "$62.5 Total Value",
      "Enhanced Leaderboard Rewards"
    ],
    isPopular: false
  },
  {
    title: "Gold Rank",
    icon: "fas fa-star",
    iconColor: "#FFD700",
    iconCount: 4,
    wagerRequirement: "$100,000",
    progressPercentage: 60,
    rewards: [
      "7 Exclusive Rewards",
      "$122.5 Total Value",
      "Priority Stream Rewards"
    ],
    isPopular: false
  },
  {
    title: "Platinum 1",
    icon: "fas fa-gem",
    iconColor: "#00BCD4",
    iconCount: 2,
    wagerRequirement: "$250,000",
    progressPercentage: 70,
    rewards: [
      "10 Exclusive Rewards",
      "$271.5 Total Value",
      "VIP Discord Access"
    ],
    isPopular: true
  },
  {
    title: "Platinum 5",
    icon: "fas fa-gem",
    iconColor: "#00BCD4",
    iconCount: 3,
    wagerRequirement: "$5,000,000",
    progressPercentage: 85,
    rewards: [
      "18 Exclusive Rewards",
      "$2,946.5 Total Value",
      "Elite Leaderboard Placement"
    ],
    isPopular: false
  },
  {
    title: "Diamond 2",
    icon: "fas fa-diamond",
    iconColor: "#B9F2FF",
    iconCount: 4,
    wagerRequirement: "$50,000,000",
    progressPercentage: 100,
    rewards: [
      "24 Exclusive Rewards",
      "$22,521.5 Total Value",
      "Custom Rewards Program"
    ],
    isPopular: false
  },
];

const RankRewardsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const renderRankIcons = (icon: string, color: string, count: number) => {
    return Array(count).fill(0).map((_, index) => (
      <i key={index} className={icon} style={{ color }}></i>
    ));
  };

  return (
    <section id="ranks" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Rank Up <span className="text-secondary">Rewards</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Progress through our tiered reward system and earn increasing benefits as you level up.
          </p>
        </motion.div>

        {/* Rank progression visualization */}
        <div className="relative max-w-4xl mx-auto mb-16 px-4">
          <div className="h-2 bg-gray-800 rounded-full relative">
            {/* Progress markers */}
            <div className="absolute -top-2 left-0 w-6 h-6 rounded-full bg-primary border-4 border-dark"></div>
            <div className="absolute -top-2 left-[15%] w-4 h-4 rounded-full bg-primary/70 border-2 border-dark"></div>
            <div className="absolute -top-2 left-[30%] w-4 h-4 rounded-full bg-primary/70 border-2 border-dark"></div>
            <div className="absolute -top-2 left-[45%] w-4 h-4 rounded-full bg-primary/70 border-2 border-dark"></div>
            <div className="absolute -top-2 left-[60%] w-4 h-4 rounded-full bg-primary/70 border-2 border-dark"></div>
            <div className="absolute -top-2 left-[75%] w-4 h-4 rounded-full bg-primary/70 border-2 border-dark"></div>
            <div className="absolute -top-2 left-[100%] w-6 h-6 rounded-full bg-secondary border-4 border-dark"></div>

            {/* Progress fill */}
            <motion.div 
              className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "60%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            ></motion.div>
          </div>

          {/* Rank labels */}
          <div className="flex justify-between mt-4 text-xs text-gray-500">
            <div className="text-center w-10 -ml-4">Start</div>
            <div className="text-center w-10">Bronze</div>
            <div className="text-center w-10">Silver</div>
            <div className="text-center w-10">Gold</div>
            <div className="text-center w-10 text-white">Plat 1</div>
            <div className="text-center w-10">Plat 5</div>
            <div className="text-center w-10 -mr-4">Dia 2</div>
          </div>

          {/* Wager requirements */}
          <div className="flex justify-between mt-1 text-xs font-semibold">
            <div className="text-center w-10 -ml-4">$0</div>
            <div className="text-center w-10">$10K</div>
            <div className="text-center w-10">$50K</div>
            <div className="text-center w-10">$100K</div>
            <div className="text-center w-10 text-secondary">$250K</div>
            <div className="text-center w-10">$5M</div>
            <div className="text-center w-10 -mr-4">$50M</div>
          </div>
        </div>

        {/* Rank cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {rankCards.map((card, index) => (
            <motion.div
              key={index}
              className={`reward-card ${
                card.isPopular
                  ? "bg-gradient-to-br from-primary/40 to-dark-purple/40"
                  : "bg-gradient-to-br from-dark to-dark-purple/20"
              } rounded-xl overflow-hidden border ${
                card.isPopular ? "border-primary/50" : "border-primary/30"
              } relative`}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
              }}
              transition={{ duration: 0.3 }}
            >
              {card.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-secondary text-dark text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <div className="flex items-center gap-1">
                    {renderRankIcons(card.icon, card.iconColor, card.iconCount)}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Wager Requirement</span>
                    <span className="font-semibold text-secondary">{card.wagerRequirement}</span>
                  </div>
                  <div className="tier-progress relative h-[6px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary to-primary rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${card.progressPercentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    ></motion.div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {card.rewards.map((reward, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <i className="fas fa-check text-accent text-sm"></i>
                      <span className={card.isPopular ? "text-white" : "text-gray-300"}>{reward}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className={`w-full py-3 rounded-lg ${
                    card.isPopular
                      ? "bg-secondary text-dark hover:bg-secondary/90"
                      : "bg-primary/20 hover:bg-primary/30 text-white"
                  } font-medium transition`}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-dark-purple/20 p-8 rounded-xl border border-primary/30 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <i className="fas fa-crown text-6xl text-secondary"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">High Roller Custom Deals</h3>
              <p className="text-gray-300 mb-4">
                Looking for a custom high roller deal? Create a ticket in our Discord server to discuss personalized offers tailored to your playing style.
              </p>
              <a
                href="#"
                className="inline-flex items-center bg-primary/20 hover:bg-primary/30 text-white py-3 px-6 rounded-lg transition"
              >
                <i className="fab fa-discord mr-2"></i>
                Join Our Discord
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RankRewardsSection;
