import { motion } from "framer-motion";

const benefitsData = [
  {
    icon: "fas fa-trophy",
    title: "Rank Up Benefits",
    description: "24 rank/mini rank up rewards totaling $22,500+ per person as you progress.",
    value: "$22,500+",
    label: "Total Rewards",
  },
  {
    icon: "fas fa-medal",
    title: "Monthly Leaderboard",
    description: "Compete for your share of $320+ in monthly prizes for top participants.",
    value: "$320+",
    label: "Monthly Prizes",
  },
  {
    icon: "fas fa-tv",
    title: "Stream Giveaways",
    description: "Information and access to exclusive stream giveaways and viewer rewards.",
    value: "Exclusive",
    label: "Viewer Rewards",
  },
  {
    icon: "fas fa-gift",
    title: "Sign Up Bonus",
    description: "Get $1 per day for 7 days with no deposit or wager needed for new users.",
    value: "$7 Total",
    label: "No Deposit Needed",
  },
];

const BenefitsSection = () => {
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

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-dark to-dark-purple/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Exclusive <span className="text-secondary">Benefits</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Using Code PENNY on Stake.com will give you access to exclusive giveaways and rewards you won't find anywhere else.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              className="reward-card bg-gradient-to-br from-dark to-dark-purple/40 rounded-xl p-6 border border-primary/30 
                        hover:transform hover:translate-y-[-5px] hover:shadow-lg transition duration-300 ease-in-out"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <i className={`${benefit.icon} text-2xl text-secondary`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 mb-4">{benefit.description}</p>
              <div className="flex items-center text-sm">
                <span className="text-secondary font-semibold">{benefit.value}</span>
                <i className="fas fa-arrow-right text-xs mx-2 text-gray-500"></i>
                <span className="text-gray-400">{benefit.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#ranks"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition"
          >
            See Detailed Rewards
            <i className="fas fa-chevron-down"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
