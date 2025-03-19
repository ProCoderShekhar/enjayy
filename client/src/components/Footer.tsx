const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-black border-t border-sky-900/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white">
              <span className="text-sky-400">Penny</span>
              <span className="text-sky-500">PTS</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a href="/" className="text-gray-400 hover:text-sky-400 transition">
              Home
            </a>
            <a href="/leaderboard" className="text-gray-400 hover:text-sky-400 transition">
              Leaderboard
            </a>
            <a href="/stream-rewards" className="text-gray-400 hover:text-sky-400 transition">
              Stream Rewards
            </a>
            <a href="https://gambleassist.pro/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition">
              GambleAssist
            </a>
          </div>

          <div className="flex justify-center space-x-4 mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-sky-400 transition text-xl">
              <i className="fab fa-discord"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-sky-400 transition text-xl">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-sky-400 transition text-xl">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} PennyPTS. All rights reserved. Not affiliated with Stake.com
          </p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-600">
            This website is intended for individuals 18 years of age and older. Gambling involves risk. Please gamble responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
