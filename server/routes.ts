import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the Penny PTS website
  app.get("/api/health", (_req, res) => {
    res.json({ status: "healthy" });
  });

  // This is a static promotional website with no data requirements,
  // but we could add API endpoints here if needed in the future
  
  const httpServer = createServer(app);

  return httpServer;
}
