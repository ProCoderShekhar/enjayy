import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const statVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="pt-28 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-dark"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-dark"></div>
      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-40 left-10 w-20 h-20 bg-secondary/10 rounded-full blur-xl"
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute top-60 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"
        animate={{ y: [10, -10, 10] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl"
        animate={{ y: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6"
            variants={itemVariants}
          >
            Unlock <span className="text-secondary">Premium Rewards</span> with Code{" "}
            <span className="relative inline-block">
              <span className="relative z-10 px-2 text-dark font-black bg-secondary rounded-md">PENNY</span>
              <span className="absolute -inset-1 bg-secondary/20 blur-sm rounded-md"></span>
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Access exclusive benefits on Stake.com including $22,500+ in rewards, monthly leaderboards, and daily bonuses.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            <a
              href="#benefits"
              className="bg-secondary hover:bg-secondary/90 text-dark font-bold py-4 px-8 rounded-lg transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              View Benefits
            </a>
            <a
              href="#signup"
              className="bg-dark border border-secondary/50 hover:border-secondary text-secondary font-bold py-4 px-8 rounded-lg transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              Sign Up Now
            </a>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-8 items-center text-center"
            variants={itemVariants}
          >
            <motion.div 
              className="flex flex-col items-center"
              variants={statVariants}
            >
              <span className="text-3xl font-bold text-secondary">5,000+</span>
              <span className="text-gray-400 text-sm">Active Users</span>
            </motion.div>
            <div className="w-px h-10 bg-gray-700"></div>
            <motion.div 
              className="flex flex-col items-center"
              variants={statVariants}
            >
              <span className="text-3xl font-bold text-secondary">$10,000+</span>
              <span className="text-gray-400 text-sm">Paid Out</span>
            </motion.div>
            <div className="w-px h-10 bg-gray-700"></div>
            <motion.div 
              className="flex flex-col items-center"
              variants={statVariants}
            >
              <span className="text-3xl font-bold text-secondary">24</span>
              <span className="text-gray-400 text-sm">Reward Tiers</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
