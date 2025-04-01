import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { updateLeaderboardData } from "./update-leaderboard";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the Penny PTS website
  app.get("/api/health", (_req, res) => {
    res.json({ status: "healthy" });
  });

  // Endpoint to manually trigger leaderboard update
  app.post("/api/update-leaderboard", async (_req, res) => {
    try {
      const success = await updateLeaderboardData();
      if (success) {
        res.json({ status: "success", message: "Leaderboard data updated successfully" });
      } else {
        res.status(500).json({ status: "error", message: "Failed to update leaderboard data" });
      }
    } catch (error) {
      res.status(500).json({ status: "error", message: `Error updating leaderboard: ${error}` });
    }
  });

  // This is a static promotional website with no data requirements,
  // but we could add more API endpoints here if needed in the future
  
  const httpServer = createServer(app);

  return httpServer;
}
