// Vercel serverless handler
import type { IncomingMessage, ServerResponse } from "node:http";
import { createServer } from "./fastify-entry.js";

// Export a serverless function for Vercel
export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> {
  try {
    console.log("API server handler invoked");
    const server = await createServer();
    console.log("Fastify server created in api-server");
    await server.ready();
    console.log("Fastify server ready in api-server");
    server.server.emit("request", req, res);
    console.log("Request handled in api-server");
  } catch (error) {
    console.error("Error in api-server function:", error);
    
    // Envoyer une réponse d'erreur si elle n'a pas encore été envoyée
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ 
        error: "Server error in api-server", 
        message: error instanceof Error ? error.message : "Unknown error" 
      }));
    }
  }
}
