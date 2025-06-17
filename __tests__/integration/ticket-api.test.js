// __tests__/integration/ticket-api.test.js
import { beforeAll, afterAll, describe, expect, it } from '@jest/globals';
import { PrismaClient } from '@prisma/client';
import Fastify from 'fastify';
import { v4 as uuidv4 } from 'uuid';

// Import pour configurer l'API Fastify
// Note: Cet import doit être adapté selon votre structure de projet
import TicketService from '../../lib/ticketService.js';

// Créer une instance fastify pour les tests
const fastify = Fastify({
  logger: false
});

// Cette fonction simule l'enregistrement de vos routes
// Adaptez-la selon votre structure de projet
const setupRoutes = async (app) => {
  app.post('/api/tickets', async (request, reply) => {
    try {
      const ticket = await TicketService.createTicket(request.body);
      return reply.code(201).send(ticket);
    } catch (error) {
      request.log.error(error);
      return reply.code(400).send({ error: error.message });
    }
  });

  app.get('/api/tickets', async (request, reply) => {
    try {
      const tickets = await TicketService.getAllTickets();
      return reply.code(200).send(tickets);
    } catch (error) {
      request.log.error(error);
      return reply.code(500).send({ error: error.message });
    }
  });

  app.get('/api/tickets/:id', async (request, reply) => {
    try {
      const ticket = await TicketService.getTicketById(request.params.id);
      if (!ticket) {
        return reply.code(404).send({ error: 'Ticket non trouvé' });
      }
      return reply.code(200).send(ticket);
    } catch (error) {
      request.log.error(error);
      return reply.code(500).send({ error: error.message });
    }
  });
};

// Variables pour les tests
let prisma;
let testUser;
let testTicket;

describe('API Tickets - Tests d\'intégration', () => {
  // Configuration avant tous les tests
  beforeAll(async () => {
    // Initialiser Prisma avec une base de données de test
    prisma = new PrismaClient();
    
    // Enregistrer les routes dans l'application Fastify
    await setupRoutes(fastify);

    // Créer un utilisateur de test
    testUser = await prisma.utilisateur.create({
      data: {
        id: uuidv4(),
        nom: 'Utilisateur Test',
        email: 'test-integration@example.com',
        motDePasseHash: 'hashbidon',
        role: 'USER',
        updatedAt: new Date()
      }
    });
    
    // Créer un ticket de test
    testTicket = await prisma.ticket.create({
      data: {
        id: uuidv4(),
        titre: 'Ticket de test',
        description: 'Description de test',
        statut: 'NOUVEAU',
        priorite: 'MOYENNE',
        dateMiseAJour: new Date(),
        utilisateurId: testUser.id
      }
    });
  });

  // Nettoyage après tous les tests
  afterAll(async () => {
    // Supprimer les données de test
    await prisma.ticket.deleteMany({
      where: { utilisateurId: testUser.id }
    });
    await prisma.utilisateur.delete({
      where: { id: testUser.id }
    });
    
    // Fermer la connexion Prisma
    await prisma.$disconnect();
    
    // Fermer le serveur Fastify
    await fastify.close();
  });

  // Tests pour l'API
  describe('GET /api/tickets', () => {
    it('devrait retourner une liste de tickets', async () => {
      const response = await fastify.inject({
        method: 'GET',
        url: '/api/tickets'
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(Array.isArray(body)).toBe(true);
    });
  });

  describe('GET /api/tickets/:id', () => {
    it('devrait retourner un ticket spécifique', async () => {
      const response = await fastify.inject({
        method: 'GET',
        url: `/api/tickets/${testTicket.id}`
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.id).toBe(testTicket.id);
      expect(body.titre).toBe('Ticket de test');
    });

    it('devrait retourner 404 pour un ID inexistant', async () => {
      const response = await fastify.inject({
        method: 'GET',
        url: '/api/tickets/non-existant-id'
      });

      expect(response.statusCode).toBe(404);
    });
  });

  describe('POST /api/tickets', () => {
    it('devrait créer un nouveau ticket', async () => {
      const ticketData = {
        titre: 'Nouveau ticket de test',
        description: 'Ceci est un test d\'intégration',
        priorite: 'HAUTE',
        utilisateurId: testUser.id
      };

      const response = await fastify.inject({
        method: 'POST',
        url: '/api/tickets',
        payload: ticketData
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.titre).toBe(ticketData.titre);
      expect(body.description).toBe(ticketData.description);
      expect(body.priorite).toBe(ticketData.priorite);
      
      // Nettoyer le ticket créé pour le test
      if (body.id) {
        await prisma.ticket.delete({ where: { id: body.id } });
      }
    });

    it('devrait retourner une erreur si le titre est manquant', async () => {
      const ticketData = {
        description: 'Description sans titre'
      };

      const response = await fastify.inject({
        method: 'POST',
        url: '/api/tickets',
        payload: ticketData
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toBe('Le titre du ticket est obligatoire');
    });
  });
});
