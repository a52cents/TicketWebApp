// Utilisons uniquement l'instance Prisma partagée pour éviter les problèmes de connexion
import prisma from "@/lib/db";

export async function data() {
  try {
    console.log("Démarrage de la récupération des tickets");

    // Vérification si le client Prisma est correctement initialisé
    if (!prisma) {
      console.error("Client Prisma non initialisé");
      return { tickets: [], error: "Client Prisma non initialisé" };
    }

    const tickets = await prisma.ticket.findMany({
      orderBy: {
        dateCreation: "desc",
      },
      include: {
        Utilisateur: {
          select: {
            nom: true,
          },
        },
      },
    });

    console.log(`${tickets.length} tickets récupérés avec succès`);

    // Transformer les dates pour éviter les problèmes de sérialisation
    const serializedTickets = tickets.map((ticket) => ({
      ...ticket,
      dateCreation: ticket.dateCreation.toISOString(),
      dateMiseAJour: ticket.dateMiseAJour.toISOString(),
    }));

    return {
      tickets: serializedTickets,
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des tickets:", error);
    // Retourner l'erreur pour faciliter le débogage
    return {
      tickets: [],
      error: error instanceof Error ? error.message : "Erreur inconnue",
    };
  } finally {
    try {
      await prisma.$disconnect();
    } catch (e) {
      console.error("Erreur lors de la déconnexion du client Prisma:", e);
    }
  }
}
