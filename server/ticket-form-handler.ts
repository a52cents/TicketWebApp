// TODO: stop using universal-middleware and directly integrate server middlewares instead and/or use vike-server https://vike.dev/server. (Bati generates boilerplates that use universal-middleware https://github.com/magne4000/universal-middleware to make Bati's internal logic easier. This is temporary and will be removed soon.)
import type { Get, UniversalHandler } from "@universal-middleware/core";
import { v4 as uuidv4 } from "uuid";
// Import TicketService directly - this has better error handling
import TicketService from "../lib/ticketService.js";

export const createTicketHandler: Get<
  [],
  UniversalHandler<Universal.Context & object>
> = () => async (request, _context, _runtime) => {
  try {
    // In a real case, user-provided data should ALWAYS be validated with tools like zod
    const ticketData = (await request.json()) as {
      text?: string;
      titre: string;
      description: string;
      priorite: string;
      id?: string;
      timestamp?: string;
    };

    console.log("Received new Ticket", ticketData);

    // Validation des données
    if (!ticketData.titre || ticketData.titre.trim() === "") {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Le titre du ticket est obligatoire",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    } // Formatter correctement les données pour le TicketService
    const ticket = {
      id: ticketData.id || uuidv4(),
      titre: ticketData.titre || ticketData.text || "",
      description: ticketData.description || "",
      priorite: (ticketData.priorite === "BASSE" ||
      ticketData.priorite === "MOYENNE" ||
      ticketData.priorite === "HAUTE"
        ? ticketData.priorite
        : "MOYENNE") as "BASSE" | "MOYENNE" | "HAUTE",
    };

    console.log("Processing ticket with TicketService:", ticket);

    let newTicket;

    // Entourer toute l'opération dans un try/catch dédié
    try {
      // Sécuriser la création du ticket avec une gestion d'erreur renforcée
      newTicket = await Promise.resolve().then(async () => {
        // Utiliser TicketService pour créer le ticket
        const ticket_result = await TicketService.createTicket(ticket);

        if (!ticket_result) {
          throw new Error(
            "Échec de création du ticket - aucun ticket retourné"
          );
        }

        console.log("Ticket successfully created:", ticket_result);
        return ticket_result;
      });
    } catch (serviceError) {
      console.error("Erreur dans TicketService.createTicket:", serviceError);
      // Ne pas relancer l'erreur, mais fournir une réponse d'erreur appropriée
      return new Response(
        JSON.stringify({
          error: "Erreur lors de la création du ticket",
          details:
            serviceError instanceof Error
              ? serviceError.message
              : "Erreur inconnue",
        }),
        {
          status: 500,
          headers: {
            "content-type": "application/json",
          },
        }
      );
    }

    return new Response(JSON.stringify({ status: "OK", ticket: newTicket }), {
      status: 201,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    console.error("Erreur lors de la création du ticket:", error);
    console.error("Error stack trace:", (error as Error).stack);

    return new Response(
      JSON.stringify({
        error: "Erreur lors de la création du ticket",
        details: (error as Error).message,
        stack: (error as Error).stack,
      }),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
};
