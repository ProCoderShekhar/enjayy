import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import RankRewardsSection from "@/components/RankRewardsSection";
import LeaderboardSection from "@/components/LeaderboardSection";
import StreamGiveawaysSection from "@/components/StreamGiveawaysSection";
import SignUpSection from "@/components/SignUpSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Home = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        
        const targetId = target.getAttribute("href");
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <RankRewardsSection />
        <LeaderboardSection />
        <StreamGiveawaysSection />
        <SignUpSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default Home;
