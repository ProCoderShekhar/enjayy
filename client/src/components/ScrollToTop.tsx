import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-sky-600 text-white shadow-lg flex items-center justify-center hover:bg-sky-500 transition-colors"
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </motion.button>
  );
};

export default ScrollToTop;