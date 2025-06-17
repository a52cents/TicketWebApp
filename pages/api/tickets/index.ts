import { FastifyRequest, FastifyReply } from "fastify";
import { $Enums } from "@/lib/generated/prisma";
import prisma from "@/lib/db";

export async function GET(req: FastifyRequest, reply: FastifyReply) {
  try {
    const tickets = await prisma.ticket.findMany({
      orderBy: {
        dateCreation: "desc",
      },
    });
    return reply.send(tickets);
  } catch (error) {
    console.error("Erreur lors de la récupération des tickets:", error);
    return reply
      .code(500)
      .send({ message: "Erreur serveur lors de la récupération des tickets" });
  }
}

export async function POST(req: FastifyRequest, reply: FastifyReply) {
  try {
    const body = req.body as {
      id: string;
      titre: string;
      description: string;
      priorite: $Enums.Priorite;
      dateMiseAJour: string;
    };

    const { id, titre, description, priorite, dateMiseAJour } = body;

    // Vérification des données
    if (!id || !titre || !description) {
      return reply.code(400).send({
        message: "Les champs id, titre et description sont obligatoires",
      });
    }

    // Pour l'exemple, on suppose que l'utilisateur est authentifié et son ID est disponible
    // Dans un cas réel, vous récupéreriez cette valeur depuis la session ou le token
    const utilisateurId = "user-123"; // À remplacer par l'ID de l'utilisateur authentifié

    const nouveauTicket = await prisma.ticket.create({
      data: {
        id,
        titre,
        description,
        priorite,
        dateMiseAJour: new Date(dateMiseAJour),
        utilisateurId,
      },
    });

    return reply.code(201).send(nouveauTicket);
  } catch (error) {
    console.error("Erreur lors de la création du ticket:", error);
    return reply
      .code(500)
      .send({ message: "Erreur serveur lors de la création du ticket" });
  }
}
