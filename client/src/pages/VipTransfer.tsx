import { motion } from "framer-motion";
import { ChevronRight, DollarSign, Zap, Award, ArrowRightLeft } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface VipTransferRowProps {
  wagerOtherSites: string;
  wagerReqUnderPenny: string;
  prizeTotal: string;
  rankRewards: string;
  beforeRewards: string;
  delay?: number;
}

const VipTransferRow = ({ wagerOtherSites, wagerReqUnderPenny, prizeTotal, rankRewards, beforeRewards, delay = 0 }: VipTransferRowProps) => {
  return (
    <motion.tr 
      className="border-b border-sky-900/30 hover:bg-black/20 transition-colors"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
    >
      <td className="px-6 py-4">{wagerOtherSites}</td>
      <td className="px-6 py-4 text-sky-400 font-medium">{wagerReqUnderPenny}</td>
      <td className="px-6 py-4">{prizeTotal}</td>
      <td className="px-6 py-4">${rankRewards}</td>
      <td className="px-6 py-4 text-amber-400">${beforeRewards}</td>
    </motion.tr>
  );
};

const VipTransfer = () => {
  // VIP Transfer data from the Google Sheets
  const vipTransferData = [
    { wagerOtherSites: "$50,000.00", wagerReqUnderPenny: "$10,000.00", prizeTotal: "$14.65", rankRewards: "25.20", beforeRewards: "17.50" },
    { wagerOtherSites: "$100,000.00", wagerReqUnderPenny: "$20,000.00", prizeTotal: "$35.85", rankRewards: "43.22", beforeRewards: "24.50" },
    { wagerOtherSites: "$150,000.00", wagerReqUnderPenny: "$30,000.00", prizeTotal: "$52.20", rankRewards: "57.12", beforeRewards: "24.50" },
    { wagerOtherSites: "$200,000.00", wagerReqUnderPenny: "$40,000.00", prizeTotal: "$74.60", rankRewards: "76.16", beforeRewards: "37.50" },
    { wagerOtherSites: "$250,000.00", wagerReqUnderPenny: "$50,000.00", prizeTotal: "$102.50", rankRewards: "121.12", beforeRewards: "62.50" },
    { wagerOtherSites: "$500,000.00", wagerReqUnderPenny: "$100,000.00", prizeTotal: "$140.00", rankRewards: "153.00", beforeRewards: "122.50" },
    { wagerOtherSites: "$600,000.00", wagerReqUnderPenny: "$120,000.00", prizeTotal: "$190.35", rankRewards: "195.80", beforeRewards: "122.50" },
    { wagerOtherSites: "$900,000.00", wagerReqUnderPenny: "$180,000.00", prizeTotal: "$266.90", rankRewards: "260.86", beforeRewards: "161.50" },
    { wagerOtherSites: "$1,000,000.00", wagerReqUnderPenny: "$200,000.00", prizeTotal: "$361.10", rankRewards: "340.93", beforeRewards: "221.50" },
    { wagerOtherSites: "$1,500,000.00", wagerReqUnderPenny: "$300,000.00", prizeTotal: "$495.00", rankRewards: "514.25", beforeRewards: "271.50" },
    { wagerOtherSites: "$2,000,000.00", wagerReqUnderPenny: "$400,000.00", prizeTotal: "$689.05", rankRewards: "679.19", beforeRewards: "271.50" },
    { wagerOtherSites: "$2,500,000.00", wagerReqUnderPenny: "$500,000.00", prizeTotal: "$915.45", rankRewards: "969.38", beforeRewards: "371.50" },
    { wagerOtherSites: "$5,000,000.00", wagerReqUnderPenny: "$1,000,000.00", prizeTotal: "$1,214.30", rankRewards: "1,372.15", beforeRewards: "931.50" },
    { wagerOtherSites: "$6,000,000.00", wagerReqUnderPenny: "$1,200,000.00", prizeTotal: "$1,645.00", rankRewards: "1,738.25", beforeRewards: "931.50" },
    { wagerOtherSites: "$9,000,000.00", wagerReqUnderPenny: "$1,800,000.00", prizeTotal: "$2,330.50", rankRewards: "2,320.92", beforeRewards: "1,321.50" },
    { wagerOtherSites: "$10,000,000.00", wagerReqUnderPenny: "$2,000,000.00", prizeTotal: "$3,144.24", rankRewards: "3,012.60", beforeRewards: "1,921.50" },
    { wagerOtherSites: "$15,000,000.00", wagerReqUnderPenny: "$3,000,000.00", prizeTotal: "$4,360.25", rankRewards: "4,322.46", beforeRewards: "1,921.50" },
    { wagerOtherSites: "$25,000,000.00", wagerReqUnderPenny: "$5,000,000.00", prizeTotal: "$6,447.00", rankRewards: "6,776.30", beforeRewards: "2,946.50" },
    { wagerOtherSites: "$50,000,000.00", wagerReqUnderPenny: "$10,000,000.00", prizeTotal: "$12,894.00", rankRewards: "13,944.10", beforeRewards: "8,046.50" }
  ];

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
                <span className="text-white">VIP </span>
                <span className="text-sky-400">Transfer</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Switch to code "PENNY" and receive bonus rewards based on your wager history from other sites or codes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* VIP Transfer Table Section */}
        <section className="py-16 bg-black/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center space-x-3 mb-8">
                <ArrowRightLeft size={30} className="text-sky-400" />
                <h2 className="text-3xl font-bold">PennyPayouts Benefits</h2>
              </div>
              <p className="text-center text-gray-300 max-w-4xl mx-auto mb-12">
                These payouts are calculated based on your wager history. Simply switch to code "PENNY" to start earning these rewards.
              </p>

              <div className="overflow-x-auto bg-slate-900/20 rounded-xl border border-sky-900/30 shadow-xl">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-sky-900/40 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Wagers on Other Sites / Codes</th>
                      <th className="px-6 py-4 text-left font-semibold">Wager Req Under Code Penny</th>
                      <th className="px-6 py-4 text-left font-semibold">Prize Total</th>
                      <th className="px-6 py-4 text-left font-semibold">+ Rank Rewards</th>
                      <th className="px-6 py-4 text-left font-semibold">Before Rewards</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vipTransferData.map((row, index) => (
                      <VipTransferRow
                        key={index}
                        wagerOtherSites={row.wagerOtherSites}
                        wagerReqUnderPenny={row.wagerReqUnderPenny}
                        prizeTotal={row.prizeTotal}
                        rankRewards={row.rankRewards}
                        beforeRewards={row.beforeRewards}
                        delay={index}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">How It </span>
                <span className="text-sky-400">Works</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Transferring your VIP status is simple and rewarding.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="bg-black/30 rounded-xl p-6 border border-sky-900/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-sky-900/30 rounded-full flex items-center justify-center text-sky-400 mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Contact Support</h3>
                  <p className="text-gray-300">
                    Reach out to our support team via Discord with details of your wager history from other sites or codes.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-black/30 rounded-xl p-6 border border-sky-900/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-sky-900/30 rounded-full flex items-center justify-center text-sky-400 mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Switch to PENNY</h3>
                  <p className="text-gray-300">
                    Start using code PENNY on Stake.com for all your gambling activities to qualify for rewards.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-black/30 rounded-xl p-6 border border-sky-900/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-sky-900/30 rounded-full flex items-center justify-center text-sky-400 mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Receive Benefits</h3>
                  <p className="text-gray-300">
                    Enjoy your VIP benefits and rewards based on your wager history as shown in the table above.
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="https://discord.gg/enjayy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium hover:opacity-90 transition"
              >
                Contact Support
                <ChevronRight size={18} className="ml-1" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">Frequently Asked </span>
                <span className="text-sky-400">Questions</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <motion.div
                  className="bg-black/30 rounded-xl p-6 border border-sky-900/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-3">How do I verify my previous wager amount?</h3>
                  <p className="text-gray-300">
                    You can provide screenshots of your wager history or transaction logs from your previous platform. Our support team will guide you through the verification process.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-black/30 rounded-xl p-6 border border-sky-900/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-3">How long does the VIP transfer process take?</h3>
                  <p className="text-gray-300">
                    Most transfers are processed within 24-48 hours after verification. Complex cases with very high wager amounts may take up to 72 hours for verification.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-black/30 rounded-xl p-6 border border-sky-900/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-3">Are there any fees for transferring my VIP status?</h3>
                  <p className="text-gray-300">
                    No, there are no fees associated with transferring your VIP status. The service is completely free for loyal users who switch to code PENNY.
                  </p>
                </motion.div>
                
                <motion.div
                  className="bg-black/30 rounded-xl p-6 border border-sky-900/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-3">Can I transfer VIP status from multiple sites?</h3>
                  <p className="text-gray-300">
                    Yes, we can combine your wager history from multiple platforms to determine your total VIP transfer benefits. Just provide details for all platforms.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VipTransfer;