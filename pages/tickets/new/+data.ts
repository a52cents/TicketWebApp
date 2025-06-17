import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

// Créer une seule instance du client Prisma
const prisma = new PrismaClient();

// Type pour les données de création de ticket
type TicketData = {
  titre: string;
  description: string;
  priorite: string;
};

// Gestionnaire pour la page - pour les requêtes GET
export async function data() {
  // Nous retournons un objet vide pour la page de création de ticket
  return {
    formTitle: "Création d'un nouveau ticket",
    formDescription: "Remplissez le formulaire ci-dessous pour créer un ticket",
  };
}

// Gestionnaire pour vérifier si nous sommes dans un contexte de création de ticket
export async function onBeforeRender(pageContext: any) {
  // Nous ajoutons simplement des données de contexte pour la page
  return {
    pageContext: {
      pageProps: {
        title: "Création d'un nouveau ticket",
        description: "Formulaire de création de ticket",
        isNewTicket: true,
      },
    },
  };
}
