import { motion } from "framer-motion";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-20 bg-secondary text-dark h-12 w-12 rounded-full shadow-lg flex items-center justify-center text-lg md:hidden"
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <i className="fas fa-arrow-up"></i>
    </motion.button>
  );
};

export default ScrollToTop;
