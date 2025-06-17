// lib/ticketService.js
// Service simple pour gérer les opérations liées aux tickets

import prisma from './prismaClient.js';
import { v4 as uuidv4 } from 'uuid';

/**
 * Service pour la gestion des tickets dans la base de données
 */
const TicketService = {
    /**
     * Crée un nouveau ticket dans la base de données
     * @param {Object} ticketData - Les données du ticket
     * @param {string} ticketData.titre - Le titre du ticket (obligatoire)
     * @param {string} ticketData.description - La description du ticket
     * @param {string} ticketData.priorite - La priorité (BASSE, MOYENNE, HAUTE)
     * @param {string} [utilisateurId] - L'ID de l'utilisateur associé au ticket
     * @returns {Promise<Object>} Le ticket créé
     */
    async createTicket(ticketData, utilisateurId = null) {
        console.log("Données du ticket reçues:", ticketData);
        try {
            // Vérifier si le titre est présent
            if (!ticketData.titre) {
                throw new Error("Le titre du ticket est obligatoire");
            }

            // Si aucun utilisateur n'est spécifié, utiliser l'utilisateur par défaut
            let userId = utilisateurId;

            if (!userId) {
                const defaultUser = await prisma.utilisateur.findFirst({
                    where: { email: "test@example.com" }
                });

                if (!defaultUser) {
                    throw new Error("Utilisateur par défaut non trouvé. Exécutez d'abord 'npm run prisma:seed'");
                }

                userId = defaultUser.id;
            }

            console.log(`Création du ticket "${ticketData.titre}" pour l'utilisateur ${userId}`);

            // Créer le ticket avec toutes les données nécessaires
            const newTicket = await prisma.ticket.create({
                data: {
                    id: ticketData.id || uuidv4(),
                    titre: ticketData.titre,
                    description: ticketData.description || "",
                    priorite: ticketData.priorite || "MOYENNE",
                    statut: "NOUVEAU",
                    dateMiseAJour: new Date(),
                    utilisateurId: userId
                    // Note: dateCreation a une valeur par défaut dans le schéma
                }
            });

            console.log(`Ticket créé avec succès: ${newTicket.id}`);
            return newTicket;
        } catch (error) {
            console.error("Erreur lors de la création du ticket:", error);
            throw error; // Relancer l'erreur pour la gérer au niveau supérieur
        }
    },

    /**
     * Récupère tous les tickets
     * @returns {Promise<Array>} Liste des tickets
     */
    async getAllTickets() {
        return await prisma.ticket.findMany({
            orderBy: { dateCreation: 'desc' },
            include: {
                Utilisateur: {
                    select: { nom: true }
                }
            }
        });
    },

    /**
     * Récupère un ticket par son ID
     * @param {string} id - L'ID du ticket
     * @returns {Promise<Object|null>} Le ticket ou null s'il n'existe pas
     */
    async getTicketById(id) {
        return await prisma.ticket.findUnique({
            where: { id },
            include: {
                Utilisateur: {
                    select: { nom: true }
                },
                Commentaire: true
            }
        });
    },

    /**
     * Met à jour un ticket existant
     * @param {string} id - L'ID du ticket à mettre à jour
     * @param {Object} updateData - Les données à mettre à jour
     * @returns {Promise<Object>} Le ticket mis à jour
     */
    async updateTicket(id, updateData) {
        return await prisma.ticket.update({
            where: { id },
            data: {
                ...updateData,
                dateMiseAJour: new Date()
            }
        });
    },

    /**
     * Supprime un ticket
     * @param {string} id - L'ID du ticket à supprimer
     * @returns {Promise<Object>} Le ticket supprimé
     */
    async deleteTicket(id) {
        return await prisma.ticket.delete({
            where: { id }
        });
    }
};

export default TicketService;
