// Vercel API route handler
import type { IncomingMessage, ServerResponse } from "node:http";
import { createServer } from "../fastify-entry.js";

// Créer une fonction de handler pour Vercel API routes
export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> {
  const app = await createServer();
  await app.ready();
  app.server.emit("request", req, res);
}
