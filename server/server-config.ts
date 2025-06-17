import { FastifyInstance } from "fastify";
import fastifyRawBody from "fastify-raw-body";

/**
 * Configure les plugins Fastify nécessaires pour l'application
 */
export async function configureServer(app: FastifyInstance) {
  // Réactiver le plugin fastify-raw-body pour universal-middleware
  await app.register(fastifyRawBody, {
    field: "rawBody",
    global: true,
    encoding: "utf8",
    runFirst: true,
  });

  // Configuration CORS
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

  // Configuration des parsers de contenu
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
  app.addContentTypeParser(
    "*",
    { parseAs: "buffer" },
    function (req, body, done) {
      done(null, body);
    }
  );

  return app;
}
