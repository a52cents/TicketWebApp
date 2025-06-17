// server/ticketsHandler.js
// Handler simple pour les opérations liées aux tickets

import TicketService from '../lib/ticketService.js';

/**
 * Handler pour la création d'un ticket
 * @param {import('fastify').FastifyRequest} request - Requête Fastify
 * @param {import('fastify').FastifyReply} reply - Réponse Fastify
 */
export async function createTicketHandler(request, reply) {
    try {
        console.log('Handler de création de ticket appelé avec:', request.body);

        // Récupérer les données du corps de la requête
        const ticketData = request.body;

        // Créer le ticket en utilisant le service
        const newTicket = await TicketService.createTicket(ticketData);

        // Répondre avec le ticket créé
        return reply.code(201).send({
            status: 'success',
            message: 'Ticket créé avec succès',
            data: newTicket
        });
    } catch (error) {
        console.error('Erreur lors de la création du ticket:', error);

        // Répondre avec une erreur
        return reply.code(500).send({
            status: 'error',
            message: error instanceof Error ? error.message : 'Erreur inconnue lors de la création du ticket'
        });
    }
}

/**
 * Handler pour récupérer tous les tickets
 * @param {import('fastify').FastifyRequest} request - Requête Fastify
 * @param {import('fastify').FastifyReply} reply - Réponse Fastify
 */
export async function getAllTicketsHandler(request, reply) {
    try {
        const tickets = await TicketService.getAllTickets();

        return reply.send({
            status: 'success',
            data: tickets
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des tickets:', error);

        return reply.code(500).send({
            status: 'error',
            message: 'Erreur lors de la récupération des tickets'
        });
    }
}

/**
 * Handler pour récupérer un ticket par son ID
 * @param {import('fastify').FastifyRequest} request - Requête Fastify
 * @param {import('fastify').FastifyReply} reply - Réponse Fastify
 */
export async function getTicketByIdHandler(request, reply) {
    try {
        const { id } = request.params;
        const ticket = await TicketService.getTicketById(id);

        if (!ticket) {
            return reply.code(404).send({
                status: 'error',
                message: 'Ticket non trouvé'
            });
        }

        return reply.send({
            status: 'success',
            data: ticket
        });
    } catch (error) {
        console.error('Erreur lors de la récupération du ticket:', error);

        return reply.code(500).send({
            status: 'error',
            message: 'Erreur lors de la récupération du ticket'
        });
    }
}
