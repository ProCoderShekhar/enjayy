import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StreamMultiRewards from "@/components/StreamMultiRewards";

const StreamRewards = () => {
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
              <span className="text-sky-400">Stream </span>
              <span className="text-white">Rewards</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Watch our streams for exclusive giveaways and rewards only available to PENNY code users.
            </p>
          </motion.div>

          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StreamMultiRewards />
          </motion.section>
          
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-black/30 rounded-lg p-6 md:p-8 border border-sky-900/30">
              <h2 className="text-2xl font-bold mb-4">Stream Schedule</h2>
              <p className="text-gray-300 mb-6">
                Join our streams Monday, Wednesday, Friday at 8PM EST for giveaways and rewards.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition"
                >
                  <i className="fab fa-youtube mr-2"></i>
                  Subscribe on YouTube
                </a>
                <a
                  href="#"
                  className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition"
                >
                  <i className="fab fa-twitch mr-2"></i>
                  Follow on Twitch
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StreamRewards;