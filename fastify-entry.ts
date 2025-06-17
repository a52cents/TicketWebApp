import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { createTodoHandler } from "./server/create-todo-handler";
import { vikeHandler } from "./server/vike-handler";
import { createTicketHandler } from "./server/ticket-form-handler";
import Fastify from "fastify";
import { createHandler } from "@universal-middleware/fastify";
import fastifyRawBody from "fastify-raw-body";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = __dirname;
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const hmrPort = process.env.HMR_PORT
  ? parseInt(process.env.HMR_PORT, 10)
  : 24678;

export async function createServer() {
  const app = Fastify({
    logger: false, // Désactiver la journalisation pour moins de bruit dans la console
  });

  // Configurer les parsers pour gérer correctement les corps de requête JSON
  await app.register(fastifyRawBody, {
    field: "rawBody",
    global: true,
    encoding: "utf8",
    runFirst: true,
  });

  // Configuration du parser JSON pour toutes les routes
  app.addContentTypeParser(
    "application/json",
    { parseAs: "string" },
    (req, body, done) => {
      try {
        const json = JSON.parse(body as string);
        done(null, json);
      } catch (err) {
        console.error("Erreur parsing JSON:", err);
        done(err as Error, undefined);
      }
    }
  );

  // Parser par défaut pour les autres types de contenu
  app.addContentTypeParser("*", function (req, payload, done) {
    done(null, undefined);
  });

  // Activer CORS pour toutes les routes
  app.addHook("preHandler", (request, reply, done) => {
    reply.header("Access-Control-Allow-Origin", "*");
    reply.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    reply.header("Access-Control-Allow-Headers", "Content-Type");

    if (request.method === "OPTIONS") {
      reply.send();
      return;
    }
    done();
  });

  await app.register(await import("@fastify/middie"));

  if (process.env.NODE_ENV === "production") {
    await app.register(await import("@fastify/static"), {
      root: `${root}/dist/client`,
      wildcard: false,
    });
  } else {
    // Instantiate Vite's development server and integrate its middleware to our server.
    // ⚠️ We should instantiate it *only* in development. (It isn't needed in production
    // and would unnecessarily bloat our server in production.)
    const vite = await import("vite");
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true, hmr: { port: hmrPort } },
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }

  // Routes API définies directement sur l'application principale

  // Route pour la création de todos
  app.post("/api/todo/create", createHandler(createTodoHandler)());

  // Routes pour les tickets
  app.get("/api/tickets", async (request, reply) => {
    console.log("GET /api/tickets appelé");
    return reply.status(200).send({
      status: "OK",
      message: "Liste des tickets récupérée avec succès",
    });
  });

  app.post("/api/tickets", async (request, reply) => {
    console.log("POST /api/tickets appelé avec body:", request.body);
    return reply.status(200).send({
      status: "OK",
      message: "Ticket créé avec succès",
    });
  });

  app.post("/api/tickets/create", createHandler(createTicketHandler)());

  // Route catch-all de Vike pour gérer les routes frontend
  // Cette route doit être définie en dernier
  app.route({
    method: ["GET", "HEAD"],
    url: "/*",
    handler: createHandler(vikeHandler)(),
  });

  return app;
}

// Uniquement exécuter le serveur si ce fichier est appelé directement (pas importé)
if (import.meta.url === `file://${__filename}`) {
  const app = await createServer();
  
  app.listen(
    {
      port: port,
    },
    () => {
      console.log(`Server listening on http://localhost:${port}`);
    }
  );
}
