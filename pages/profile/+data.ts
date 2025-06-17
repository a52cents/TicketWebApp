import prisma from "@/lib/db";

// Fonction pour récupérer les données de l'utilisateur
export async function data() {
  try {
    // Dans une vraie application, vous récupéreriez l'ID de l'utilisateur à partir d'une session
    // Pour cet exemple, nous utilisons l'utilisateur de test
    const user = await prisma.utilisateur.findFirst({
      where: {
        email: "test@example.com"
      },
      include: {
        Ticket: {
          orderBy: {
            dateCreation: "desc"
          },
          take: 5  // Limitez à 5 tickets récents
        }
      }
    });

    // Vérifier si un utilisateur a été trouvé
    if (!user) {
      return {
        error: "Utilisateur non trouvé",
        user: null,
        recentTickets: []
      };
    }

    // Préparer les données à retourner
    const userData = {
      id: user.id,
      nom: user.nom,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt.toISOString()
    };

    // Transformer les dates pour éviter les problèmes de sérialisation
    const recentTickets = user.Ticket.map(ticket => ({
      ...ticket,
      dateCreation: ticket.dateCreation.toISOString(),
      dateMiseAJour: ticket.dateMiseAJour.toISOString()
    }));

    return {
      user: userData,
      recentTickets,
      error: null
    };
  } catch (error) {
    console.error("Erreur lors de la récupération du profil:", error);
    return {
      error: error instanceof Error ? error.message : "Erreur inconnue",
      user: null,
      recentTickets: []
    };
  }
}
