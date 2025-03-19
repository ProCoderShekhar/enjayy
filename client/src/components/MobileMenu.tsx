import { Link } from "wouter";
import { motion } from "framer-motion";
import { X, ChevronRight, Home, Trophy, Gift } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuVariants = {
    closed: { x: "100%", transition: { duration: 0.3 } },
    open: { x: 0, transition: { duration: 0.3 } },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 10 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.3 },
    }),
  };

  const links = [
    { href: "/", label: "Home", icon: <Home size={20} /> },
    { href: "/leaderboard", label: "Leaderboard", icon: <Trophy size={20} /> },
    { href: "/stream-rewards", label: "Stream Rewards", icon: <Gift size={20} /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Menu container */}
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={menuVariants}
        className="absolute top-0 right-0 bottom-0 w-72 bg-slate-900 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <div className="flex justify-between items-center p-4 border-b border-sky-900/30">
          <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            PennyPTS
          </span>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white rounded-full"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="p-4 space-y-2">
          {links.map((link, i) => (
            <motion.div
              key={link.href}
              custom={i}
              initial="closed"
              animate="open"
              exit="closed"
              variants={linkVariants}
            >
              <Link href={link.href}>
                <div
                  onClick={onClose}
                  className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-sky-900/30 hover:text-sky-400 transition cursor-pointer"
                >
                  <span className="mr-3">{link.icon}</span>
                  <span className="font-medium">{link.label}</span>
                </div>
              </Link>
            </motion.div>
          ))}

          <motion.div
            custom={3}
            initial="closed"
            animate="open"
            exit="closed"
            variants={linkVariants}
            className="pt-4 mt-4 border-t border-sky-900/30"
          >
            <a
              href="https://stake.com/?c=penny"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium hover:opacity-90 transition"
            >
              Join Stake with PENNY
              <ChevronRight size={18} />
            </a>
          </motion.div>
        </nav>

        {/* Footer */}
        <motion.div
          custom={4}
          initial="closed"
          animate="open"
          exit="closed"
          variants={linkVariants}
          className="absolute bottom-0 left-0 right-0 p-4 text-center text-sm text-gray-500"
        >
          <p>Use code: <span className="text-sky-400 font-bold">PENNY</span></p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;