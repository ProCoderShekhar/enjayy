import { motion } from "framer-motion";

const minesRewardsData = [
  { multiplier: "11,314.94x", viewerPrize: "$6", codeUserPrize: "$10" },
  { multiplier: "12,123.15x", viewerPrize: "$6.5", codeUserPrize: "$11" },
  { multiplier: "12,523.5x", viewerPrize: "$6.5", codeUserPrize: "$11" },
  { multiplier: "13,219.25x", viewerPrize: "$7", codeUserPrize: "$12" },
  { multiplier: "23,794.65x", viewerPrize: "$11", codeUserPrize: "$19" },
  { multiplier: "25,047.00x", viewerPrize: "$12.5", codeUserPrize: "$20.5" },
  { multiplier: "36,773.55x", viewerPrize: "$17", codeUserPrize: "$27" },
  { multiplier: "49,031.4x", viewerPrize: "$22", codeUserPrize: "$40" },
  { multiplier: "52,598.7x", viewerPrize: "$25", codeUserPrize: "$46" },
  { multiplier: "56,574.69x", viewerPrize: "$28.5", codeUserPrize: "$50" },
  { multiplier: "59,486.62x", viewerPrize: "$30", codeUserPrize: "$53" },
  { multiplier: "118,973.2x", viewerPrize: "$60", codeUserPrize: "$105" },
  { multiplier: "175,329x", viewerPrize: "$83", codeUserPrize: "$150" },
  { multiplier: "202,254.52x", viewerPrize: "$101.20", codeUserPrize: "$170.75" },
  { multiplier: "294,188.4x", viewerPrize: "$145", codeUserPrize: "$250" },
  { multiplier: "367,735.5x", viewerPrize: "$180", codeUserPrize: "$315" },
  { multiplier: "396,022.85x", viewerPrize: "$197.5", codeUserPrize: "$345" },
  { multiplier: "475,893x", viewerPrize: "$235", codeUserPrize: "$420" },
  { multiplier: "1,070,759.25x", viewerPrize: "$485", codeUserPrize: "$900" },
  { multiplier: "2,022,545.25x", viewerPrize: "$915", codeUserPrize: "$1725" },
  { multiplier: "3,236,072.4x", viewerPrize: "$1600", codeUserPrize: "$2810" },
  { multiplier: "4,412,826x", viewerPrize: "$2165", codeUserPrize: "$3795" },
  { multiplier: "5,148,297x", viewerPrize: "$2545", codeUserPrize: "$4548" },
];

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