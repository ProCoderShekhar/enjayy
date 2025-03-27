import { useEffect, useState } from "react";
import { Switch, Route } from "wouter";

import Home from "@/pages/Home";
import Leaderboard from "@/pages/Leaderboard";
import StreamRewards from "@/pages/StreamRewards";
import RankRewards from "@/pages/RankRewards";
import VipTransfer from "@/pages/VipTransfer";
import NotFound from "@/pages/not-found";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/stream-rewards" component={StreamRewards} />
        <Route path="/rank-rewards" component={RankRewards} />
        <Route path="/vip-transfer" component={VipTransfer} />
        <Route component={NotFound} />
      </Switch>
      {showScrollToTop && <ScrollToTop />}
    </>
  );
}

export default App;
