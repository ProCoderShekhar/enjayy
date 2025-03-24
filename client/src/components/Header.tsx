import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent cursor-pointer">
                PennyPayouts
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavLink href="/" label="Home" isActive={location === "/"} />
            <NavLink
              href="/leaderboard"
              label="Leaderboard"
              isActive={location === "/leaderboard"}
            />
            <NavLink
              href="/stream-rewards"
              label="Stream Rewards"
              isActive={location === "/stream-rewards"}
            />
            <NavLink
              href="/rank-rewards"
              label="Rank Rewards"
              isActive={location === "/rank-rewards"}
            />
            <a
              href="https://stake.com/?c=penny"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-medium hover:opacity-90 transition"
            >
              Join with PENNY
              <ChevronRight size={16} className="ml-1" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white p-1"
            aria-label="Open mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

const NavLink = ({ href, label, isActive }: NavLinkProps) => {
  return (
    <Link href={href}>
      <div
        className={cn(
          "inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer",
          isActive
            ? "bg-sky-900/30 text-sky-400"
            : "text-gray-300 hover:bg-sky-900/20 hover:text-white"
        )}
      >
        {label}
      </div>
    </Link>
  );
};

export default Header;