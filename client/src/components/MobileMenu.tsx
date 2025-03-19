import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const handleNavigate = (path: string) => {
    onClose();
    window.location.href = path;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black z-40 flex flex-col pt-20 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4 text-lg">
            <button 
              className="py-3 border-b border-gray-800 flex justify-between items-center"
              onClick={() => handleNavigate("/")}
            >
              Home <i className="fas fa-chevron-right text-sky-400 text-sm"></i>
            </button>
            <button 
              className="py-3 border-b border-gray-800 flex justify-between items-center"
              onClick={() => handleNavigate("/leaderboard")}
            >
              Leaderboard <i className="fas fa-chevron-right text-sky-400 text-sm"></i>
            </button>
            <button 
              className="py-3 border-b border-gray-800 flex justify-between items-center"
              onClick={() => handleNavigate("/stream-rewards")}
            >
              Stream Rewards <i className="fas fa-chevron-right text-sky-400 text-sm"></i>
            </button>
            <a 
              href="https://gambleassist.pro/"
              target="_blank" 
              rel="noopener noreferrer"
              className="py-3 border-b border-gray-800 flex justify-between items-center"
              onClick={onClose}
            >
              GambleAssist <i className="fas fa-chevron-right text-sky-400 text-sm"></i>
            </a>
          </div>

          <button 
            className="mt-8 bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-lg font-bold"
          >
            USE CODE: PENNY
          </button>

          <div className="mt-auto mb-10 flex justify-center space-x-6 text-2xl py-4">
            <a href="#" className="text-gray-400 hover:text-sky-400">
              <i className="fas fa-globe"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-sky-400">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-sky-400">
              <i className="fab fa-discord"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-sky-400">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
