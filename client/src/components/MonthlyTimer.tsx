import { useEffect, useState } from "react";
import { Timer, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface MonthlyTimerProps {
  className?: string;
}

const MonthlyTimer: React.FC<MonthlyTimerProps> = ({ className = "" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Function to calculate time until the end of the month
    const calculateTimeLeft = () => {
      const now = new Date();
      const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59); // Last day of current month
      const difference = lastDay.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Clean up on unmount
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <motion.div 
      className={`flex flex-col items-center ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center mb-2 text-sky-400">
        <Timer size={16} className="mr-1" />
        <span className="text-sm font-medium">Monthly Leaderboard Ends In:</span>
      </div>
      
      <div className="grid grid-cols-4 gap-2 xs:gap-3">
        <div className="flex flex-col items-center">
          <div className="bg-slate-900/80 px-2 py-1 min-w-[3rem] rounded text-center font-mono">
            <span className="text-xl font-bold">{formatNumber(timeLeft.days)}</span>
          </div>
          <span className="text-xs text-gray-500 mt-1">Days</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-slate-900/80 px-2 py-1 min-w-[3rem] rounded text-center font-mono">
            <span className="text-xl font-bold">{formatNumber(timeLeft.hours)}</span>
          </div>
          <span className="text-xs text-gray-500 mt-1">Hours</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-slate-900/80 px-2 py-1 min-w-[3rem] rounded text-center font-mono">
            <span className="text-xl font-bold">{formatNumber(timeLeft.minutes)}</span>
          </div>
          <span className="text-xs text-gray-500 mt-1">Min</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-slate-900/80 px-2 py-1 min-w-[3rem] rounded text-center font-mono">
            <span className="text-xl font-bold">{formatNumber(timeLeft.seconds)}</span>
          </div>
          <span className="text-xs text-gray-500 mt-1">Sec</span>
        </div>
      </div>
      
      <div className="mt-2 text-xs flex items-center text-gray-400">
        <Calendar size={12} className="mr-1" />
        <span>Resets on the last day of every month</span>
      </div>
    </motion.div>
  );
};

export default MonthlyTimer;