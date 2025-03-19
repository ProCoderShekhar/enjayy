import { Link } from "wouter";
import { Github, Twitter, Instagram, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: <Twitter size={18} />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: <Instagram size={18} />,
    },
    {
      name: "GitHub",
      url: "https://github.com",
      icon: <Github size={18} />,
    },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "Leaderboard", url: "/leaderboard" },
    { name: "Stream Rewards", url: "/stream-rewards" },
  ];

  const resourceLinks = [
    { name: "Join Stake.com", url: "https://stake.com", isExternal: true },
    { name: "VIP Benefits", url: "https://stake.com/vip", isExternal: true },
    { name: "Support", url: "https://help.stake.com", isExternal: true },
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
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-sky-900/30 flex items-center justify-center text-sky-400 hover:bg-sky-800/50 transition"
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
                  <Link href={link.url}>
                    <a className="text-gray-400 hover:text-sky-400 transition">
                      {link.name}
                    </a>
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
                    <Link href={link.url}>
                      <a className="text-gray-400 hover:text-sky-400 transition">
                        {link.name}
                      </a>
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
          <div className="text-gray-500 text-sm">
            <span className="text-sky-400 font-medium">PENNY</span> - Exclusive Gambling Code on Stake.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;