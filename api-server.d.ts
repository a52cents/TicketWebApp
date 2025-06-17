// Type definitions for api-server.js
import type { IncomingMessage, ServerResponse } from "node:http";

export default function handler(
  req: IncomingMessage,
  res: ServerResponse
): Promise<void>;
