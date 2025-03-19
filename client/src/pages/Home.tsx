import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RankBenefitsTable from "@/components/RankBenefitsTable";

const Home = () => {
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
              <span className="text-white">Stake Code </span>
              <span className="text-sky-400">PENNY</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Access exclusive benefits including $22,500+ in rewards, monthly leaderboards, and stream giveaways.
            </p>
            <a
              href="#ranks"
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold py-3 px-8 rounded-lg inline-block hover:opacity-90 transition"
            >
              View Benefits
            </a>
          </motion.div>

          <motion.section
            id="ranks"
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-black/30 rounded-lg p-6 md:p-8 border border-sky-900/30 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Rank Up and Mini Benefits
              </h2>
              <RankBenefitsTable />
            </div>
          </motion.section>
          
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-black/30 rounded-lg p-6 md:p-8 border border-sky-900/30">
              <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
              <p className="text-gray-300 mb-6">
                Connect with other players, get support, and stay updated on the latest promotions and giveaways.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center bg-black/50 hover:bg-black/70 text-white py-3 px-6 rounded-lg transition"
                >
                  <i className="fab fa-discord mr-2"></i>
                  Discord
                </a>
                <a
                  href="#"
                  className="inline-flex items-center bg-black/50 hover:bg-black/70 text-white py-3 px-6 rounded-lg transition"
                >
                  <i className="fab fa-youtube mr-2"></i>
                  YouTube
                </a>
                <a
                  href="#"
                  className="inline-flex items-center bg-black/50 hover:bg-black/70 text-white py-3 px-6 rounded-lg transition"
                >
                  <i className="fab fa-twitter mr-2 text-white"></i>
                  Twitter
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

export default Home;
