import { motion } from "framer-motion";
import { useState } from "react";

const FloatingCTA = () => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="fixed bottom-6 right-6 z-20 md:hidden">
      <motion.button
        className="bg-secondary text-dark h-14 w-14 rounded-full shadow-lg flex items-center justify-center text-2xl"
        onClick={toggleInfo}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          scale: [1, 1.1, 1],
          transition: { repeat: Infinity, duration: 2 }
        }}
      >
        <i className="fas fa-gift"></i>
      </motion.button>

      {showInfo && (
        <motion.div 
          className="absolute bottom-16 right-0 w-60 bg-dark p-4 rounded-lg shadow-lg border border-primary/30"
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="font-semibold mb-2">Use Code: PENNY</h3>
          <p className="text-sm text-gray-400 mb-3">Unlock $22,500+ in rewards & exclusive benefits!</p>
          <a 
            href="#signup" 
            className="w-full block bg-secondary hover:bg-secondary/90 text-dark text-center py-2 rounded font-medium text-sm"
            onClick={() => setShowInfo(false)}
          >
            Get Started
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default FloatingCTA;
