import { motion } from "framer-motion";
import { minesRewardsData } from "@/data/leaderboard-data";

const StreamMultiRewards = () => {
  return (
    <div className="w-full">
      <motion.div 
        className="bg-black/30 rounded-lg p-6 border border-sky-900/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">High Multi Chase Rewards</h2>
        
        <p className="text-gray-300 mb-6">
          Hit the multi successfully in your x amount of bets given to win a prize:
        </p>
        
        <h3 className="text-xl font-semibold mb-4 text-sky-400">Mines:</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-black/40 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-sky-900/40 text-white">
                <th className="px-4 py-3 text-left">Multiplier</th>
                <th className="px-4 py-3 text-left">Viewer Prize</th>
                <th className="px-4 py-3 text-left">Code User Prize</th>
              </tr>
            </thead>
            <tbody>
              {minesRewardsData.map((row, index) => (
                <motion.tr 
                  key={index}
                  className="border-b border-gray-800"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.01, duration: 0.2 }}
                >
                  <td className="px-4 py-2 font-medium">{row.multiplier}</td>
                  <td className="px-4 py-2">{row.viewerPrize}</td>
                  <td className="px-4 py-2 text-sky-400 font-semibold">{row.codeUserPrize}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2 text-sky-400">Other Originals:</h3>
          <p className="text-gray-300">
            Will be calculated all after stream but similar to mines.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default StreamMultiRewards;