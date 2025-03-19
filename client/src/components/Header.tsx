import { useState, useEffect } from "react";
import { Link } from "wouter";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-sky-500/20 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white mr-2">
              <span className="text-sky-400">Penny</span>
              <span className="text-sky-500">PTS</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="/" className="text-white hover:text-sky-400 transition">
              Home
            </a>
            <a href="/leaderboard" className="text-white hover:text-sky-400 transition">
              Leaderboard
            </a>
            <a href="/stream-rewards" className="text-white hover:text-sky-400 transition">
              Stream Rewards
            </a>
            <a href="https://gambleassist.pro/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 transition">
              GambleAssist
            </a>
          </div>

          <button className="bg-gradient-to-r from-sky-500 to-blue-600 py-2 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-sky-500/20 transition-all hover:-translate-y-0.5">
            Use Code: <span className="font-bold text-white">PENNY</span>
          </button>

          <button 
            className="md:hidden text-2xl"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
      
      {/* Social Media Icons */}
      <div className="fixed right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-40">
        <a href="#" className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:opacity-90 transition">
          <i className="fas fa-globe text-white"></i>
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:opacity-90 transition">
          <i className="fab fa-youtube text-white"></i>
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:opacity-90 transition">
          <i className="fab fa-x-twitter text-white"></i>
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:opacity-90 transition">
          <i className="fab fa-discord text-white"></i>
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:opacity-90 transition">
          <i className="fas fa-heart text-white"></i>
        </a>
      </div>
    </>
  );
};

export default Header;
