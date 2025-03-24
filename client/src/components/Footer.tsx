import { Link } from "wouter";
import { MessageCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { SiKick, SiDiscord, SiYoutube, SiTwitch, SiInstagram, SiX } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Kick",
      url: "http://kick.com/enjayy",
      icon: <SiKick size={18} />,
      color: "text-[#53fc18]"
    },
    {
      name: "Discord",
      url: "https://discord.gg/enjayy",
      icon: <SiDiscord size={18} />,
      color: "text-[#5865F2]"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@EnjayyLive",
      icon: <SiYoutube size={18} />,
      color: "text-[#FF0000]"
    },
    {
      name: "X",
      url: "https://x.com/imEnjayy",
      icon: <SiX size={18} />,
      color: "text-white"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/imenjayy",
      icon: <SiInstagram size={18} />,
      color: "text-[#E4405F]"
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/imenjayy",
      icon: <SiTwitch size={18} />,
      color: "text-[#9146FF]"
    },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "Leaderboard", url: "/leaderboard" },
    { name: "Stream Rewards", url: "/stream-rewards" },
    { name: "Rank Rewards", url: "/rank-rewards" },
  ];

  const resourceLinks = [
    { name: "Join Stake.com", url: "https://stake.com/?c=penny", isExternal: true },
    { name: "Discord Support", url: "https://discord.gg/enjayy", isExternal: true, icon: <SiDiscord size={14} className="mr-1 text-[#5865F2]" /> },
    { name: "Kick Channel", url: "http://kick.com/enjayy", isExternal: true, icon: <SiKick size={14} className="mr-1 text-[#53fc18]" /> },
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-slate-950 border-t border-sky-900/30">
      <div className="container mx-auto px-4 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">PennyPTS</h3>
            <p className="text-gray-400 mb-4">
              Use code PENNY on Stake.com to unlock exclusive rewards, including monthly leaderboards and stream giveaways.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full bg-slate-900/50 flex items-center justify-center ${link.color} hover:bg-slate-800/70 transition`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.url} className="text-gray-400 hover:text-sky-400 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  {link.isExternal ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-sky-400 transition flex items-center"
                    >
                      {link.name}
                      <ExternalLink size={14} className="ml-1 opacity-70" />
                    </a>
                  ) : (
                    <Link href={link.url} className="text-gray-400 hover:text-sky-400 transition">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-sky-900/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} PennyPTS. All rights reserved.
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-gray-500 text-sm">
              <span className="text-sky-400 font-medium">PENNY</span> - Exclusive Gambling Code on Stake.com
            </div>
            <a 
              href="https://discord.gg/YGVXDwNrJU" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm group transition-all duration-300 hover:scale-105"
            >
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-medium group-hover:from-purple-500 group-hover:to-pink-500">
                Made with 💗 by Nobita
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;