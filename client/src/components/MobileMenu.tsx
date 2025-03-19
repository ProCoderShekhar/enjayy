import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const handleLinkClick = (id: string) => {
    onClose();
    
    // Allow time for the menu animation to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-dark z-40 flex flex-col pt-20 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4 text-lg">
            <button 
              className="py-3 border-b border-gray-800 flex justify-between items-center"
              onClick={() => handleLinkClick("benefits")}
            >
              Benefits <i className="fas fa-chevron-right text-secondary text-sm"></i>
            </button>
            <button 
              className="py-3 border-b border-gray-800 flex justify-between items-center"
              onClick={() => handleLinkClick("ranks")}
            >
              Ranks <i className="fas fa-chevron-right text-secondary text-sm"></i>
            </button>
            <button 
              className="py-3 border-b border-gray-800 flex justify-between items-center"
              onClick={() => handleLinkClick("leaderboard")}
            >
              Leaderboard <i className="fas fa-chevron-right text-secondary text-sm"></i>
            </button>
            <button 
              className="py-3 border-b border-gray-800 flex justify-between items-center"
              onClick={() => handleLinkClick("stream")}
            >
              Stream <i className="fas fa-chevron-right text-secondary text-sm"></i>
            </button>
            <button 
              className="py-3 border-b border-gray-800 flex justify-between items-center"
              onClick={() => handleLinkClick("signup")}
            >
              Sign Up <i className="fas fa-chevron-right text-secondary text-sm"></i>
            </button>
          </div>

          <button 
            className="mt-8 bg-secondary text-dark py-3 rounded-lg font-bold"
            onClick={() => handleLinkClick("signup")}
          >
            GET STARTED NOW
          </button>

          <div className="mt-auto mb-10 flex justify-center space-x-6 text-2xl py-4">
            <a href="#" className="text-gray-400 hover:text-secondary">
              <i className="fab fa-discord"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-secondary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-secondary">
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
