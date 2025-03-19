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
        className={`fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-primary/20 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-2xl font-bold font-montserrat text-white mr-2">
                <span className="text-secondary">Penny</span>
                <span className="text-accent">PTS</span>
              </a>
            </Link>
            <span className="hidden md:inline-block text-xs py-1 px-2 bg-secondary/20 text-secondary rounded-md">
              EXCLUSIVE
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#benefits" className="opacity-80 hover:opacity-100 hover:text-secondary transition">
              Benefits
            </a>
            <a href="#ranks" className="opacity-80 hover:opacity-100 hover:text-secondary transition">
              Ranks
            </a>
            <a href="#leaderboard" className="opacity-80 hover:opacity-100 hover:text-secondary transition">
              Leaderboard
            </a>
            <a href="#stream" className="opacity-80 hover:opacity-100 hover:text-secondary transition">
              Stream
            </a>
            <a href="#signup" className="opacity-80 hover:opacity-100 hover:text-secondary transition">
              Sign Up
            </a>
          </div>

          <button className="bg-gradient-to-r from-primary to-dark-purple/90 py-2 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-0.5">
            Use Code: <span className="font-bold text-secondary">PENNY</span>
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
    </>
  );
};

export default Header;
