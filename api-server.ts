// Vercel serverless handler
import type { IncomingMessage, ServerResponse } from "node:http";
import { createServer } from "./fastify-entry.js";

// Export a serverless function for Vercel
export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> {
  const server = await createServer();
  await server.ready();
  server.server.emit("request", req, res);
}
