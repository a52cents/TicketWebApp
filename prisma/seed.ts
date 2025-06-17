import { $Enums } from "../lib/generated/prisma";
import prisma from "../lib/db";
import { v4 as uuidv4 } from "uuid";

async function main() {
  try {
    // Création d'un utilisateur de test s'il n'existe pas
    const userId = uuidv4();
    const utilisateur = await prisma.utilisateur.upsert({
      where: { email: "test@example.com" },
      update: {},
      create: {
        id: userId,
        nom: "Utilisateur Test",
        email: "test@example.com",
        motDePasseHash: "motdepassetest", // Dans un vrai scénario, ce serait un hash
        updatedAt: new Date(),
      },
    });

    console.log("Utilisateur créé ou trouvé:", utilisateur); // Création de tickets de test
    const tickets = [
      {
        id: uuidv4(),
        titre: "Problème de connexion",
        description:
          "Je ne parviens pas à me connecter à mon compte depuis hier.",
        priorite: $Enums.Priorite.HAUTE,
        statut: $Enums.Statut.NOUVEAU,
        dateMiseAJour: new Date(),
        utilisateurId: utilisateur.id,
      },
      {
        id: uuidv4(),
        titre: "Question sur la facturation",
        description:
          "Je souhaite comprendre pourquoi ma dernière facture est plus élevée que d'habitude.",
        priorite: $Enums.Priorite.MOYENNE,
        statut: $Enums.Statut.EN_COURS,
        dateMiseAJour: new Date(),
        utilisateurId: utilisateur.id,
      },
      {
        id: uuidv4(),
        titre: "Suggestion d'amélioration",
        description:
          "J'aimerais suggérer d'ajouter une fonctionnalité de notification par SMS.",
        priorite: $Enums.Priorite.BASSE,
        statut: $Enums.Statut.NOUVEAU,
        dateMiseAJour: new Date(),
        utilisateurId: utilisateur.id,
      },
    ];

    for (const ticket of tickets) {
      await prisma.ticket.create({
        data: ticket,
      });
    }

    console.log(`${tickets.length} tickets créés avec succès.`);
  } catch (error) {
    console.error("Erreur lors de la création des données de test:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
