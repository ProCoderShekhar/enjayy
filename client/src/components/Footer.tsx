const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-dark border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold font-montserrat text-white mb-4">
              <span className="text-secondary">Penny</span>
              <span className="text-accent">PTS</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              The exclusive rewards program for Stake.com users. Use code PENNY to unlock premium benefits and bonuses.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#benefits" className="text-gray-400 hover:text-secondary transition">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#ranks" className="text-gray-400 hover:text-secondary transition">
                    Rank Rewards
                  </a>
                </li>
                <li>
                  <a href="#leaderboard" className="text-gray-400 hover:text-secondary transition">
                    Leaderboard
                  </a>
                </li>
                <li>
                  <a href="#stream" className="text-gray-400 hover:text-secondary transition">
                    Stream Giveaways
                  </a>
                </li>
                <li>
                  <a href="#signup" className="text-gray-400 hover:text-secondary transition">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-secondary transition">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-secondary transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-secondary transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-secondary transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-secondary transition">
                    Responsible Gaming
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-secondary transition flex items-center">
                    <i className="fab fa-discord mr-2"></i> Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-secondary transition flex items-center">
                    <i className="fab fa-telegram mr-2"></i> Telegram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-secondary transition flex items-center">
                    <i className="fab fa-twitter mr-2"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-secondary transition flex items-center">
                    <i className="fab fa-twitch mr-2"></i> Twitch
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-secondary transition flex items-center">
                    <i className="fab fa-youtube mr-2"></i> YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} PennyPTS. All rights reserved. Not affiliated with Stake.com
          </p>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-secondary transition">
              <i className="fab fa-discord"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-secondary transition">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-secondary transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-secondary transition">
              <i className="fab fa-twitch"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-secondary transition">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-900/50 rounded-lg text-center">
          <p className="text-xs text-gray-500">
            This website is intended for individuals 18 years of age and older. Gambling involves risk. Please gamble responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
