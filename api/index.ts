// Vercel API route handler
import type { IncomingMessage, ServerResponse } from "node:http";
import { createServer } from "../fastify-entry.js";

// Créer une fonction de handler pour Vercel API routes
export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> {
  try {
    console.log("API handler invoked");
    const app = await createServer();
    console.log("Fastify server created");
    await app.ready();
    console.log("Fastify server ready");
    app.server.emit("request", req, res);
    console.log("Request handled");
  } catch (error) {
    console.error("Error in serverless function:", error);
    
    // Envoyer une réponse d'erreur si elle n'a pas encore été envoyée
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ 
        error: "Server error", 
        message: error instanceof Error ? error.message : "Unknown error" 
      }));
    }
  }
}
