import { motion } from "framer-motion";

const rankBenefitsData = [
  { rank: "Mini Benefit", wager: "$5,000", supportReward: "", enjayReward: "$2.5", total: "$2.5" },
  { rank: "Bronze", wager: "$10,000", supportReward: "$15", enjayReward: "$15", total: "$17.5" },
  { rank: "Mini Benefit", wager: "$20,000", supportReward: "", enjayReward: "$7", total: "$24.5" },
  { rank: "Mini Benefit", wager: "$40,000", supportReward: "", enjayReward: "$13", total: "$37.5" },
  { rank: "Silver", wager: "$50,000", supportReward: "$50", enjayReward: "$25", total: "$62.5" },
  { rank: "Mini Benefit", wager: "$75,000", supportReward: "", enjayReward: "$25", total: "$87.5" },
  { rank: "Gold", wager: "$100,000", supportReward: "$100", enjayReward: "$35", total: "$122.5" },
  { rank: "Mini Benefit", wager: "$150,000", supportReward: "", enjayReward: "$39", total: "$161.5" },
  { rank: "Mini Benefit", wager: "$200,000", supportReward: "", enjayReward: "$60", total: "$221.5" },
  { rank: "Plat 1", wager: "$250,000", supportReward: "$200", enjayReward: "$50", total: "$271.5" },
  { rank: "Plat 2", wager: "$500,000", supportReward: "$400", enjayReward: "$100", total: "$371.5" },
  { rank: "Mini Benefit", wager: "$600,000", supportReward: "", enjayReward: "$130", total: "$501.5" },
  { rank: "Mini Benefit", wager: "$900,000", supportReward: "", enjayReward: "$255", total: "$756.5" },
  { rank: "Plat 3", wager: "$1,000,000", supportReward: "$800", enjayReward: "$175", total: "$931.5" },
  { rank: "Mini Benefit", wager: "$1,500,000", supportReward: "", enjayReward: "$390", total: "$1,321.5" },
  { rank: "Mini Benefit", wager: "$2,000,000", supportReward: "", enjayReward: "$600", total: "$1,921.5" },
  { rank: "Plat 4", wager: "$2,500,000", supportReward: "$1,600", enjayReward: "$325", total: "$2,246.5" },
  { rank: "Plat 5", wager: "$5,000,000", supportReward: "$3,200", enjayReward: "$700", total: "$2,946.5" },
  { rank: "Mini Benefit", wager: "$6,000,000", supportReward: "", enjayReward: "$1,300", total: "$4,246.5" },
  { rank: "Mini Benefit", wager: "$9,000,000", supportReward: "", enjayReward: "$2,550", total: "$6,796.5" },
  { rank: "Plat 6", wager: "$10,000,000", supportReward: "$6,400", enjayReward: "$1,250", total: "$8,046.5" },
  { rank: "Mini Benefit", wager: "$15,000,000", supportReward: "", enjayReward: "$3,975", total: "$12,021.5" },
  { rank: "Diamond 1", wager: "$25,000,000", supportReward: "$12,800", enjayReward: "$3,000", total: "$15,021.5" },
  { rank: "Diamond 2", wager: "$50,000,000", supportReward: "$25,600", enjayReward: "$7,500", total: "$22,521.5" },
];

const RankBenefitsTable = () => {
  return (
    <div className="w-full overflow-x-auto">
      <motion.table 
        className="min-w-full bg-black/40 rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <thead>
          <tr className="bg-sky-900/40 text-white">
            <th className="px-4 py-3 text-left">RANK</th>
            <th className="px-4 py-3 text-left">WAGER</th>
            <th className="px-4 py-3 text-left">Reward from Support</th>
            <th className="px-4 py-3 text-left">Reward from Enjayy</th>
            <th className="px-4 py-3 text-left">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {rankBenefitsData.map((row, index) => (
            <motion.tr 
              key={index}
              className={`border-b border-gray-800 ${
                row.rank.includes("Mini") ? "bg-transparent" : "bg-sky-900/20"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03, duration: 0.3 }}
            >
              <td className="px-4 py-3 font-medium">
                {row.rank.includes("Mini") ? (
                  <span>{row.rank}</span>
                ) : (
                  <span className="text-sky-400">{row.rank}</span>
                )}
              </td>
              <td className="px-4 py-3">{row.wager}</td>
              <td className="px-4 py-3">{row.supportReward}</td>
              <td className="px-4 py-3">{row.enjayReward}</td>
              <td className="px-4 py-3 font-bold text-sky-400">{row.total}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
      
      <p className="text-sm text-gray-400 mt-4 italic">
        *Total only counts the amount of the rewards from Enjayy, not from Support.
      </p>
    </div>
  );
};

export default RankBenefitsTable;