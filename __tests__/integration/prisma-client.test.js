// __tests__/integration/prisma-client.test.js
import { beforeAll, afterAll, describe, expect, it } from '@jest/globals';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

// Variables pour les tests
let prisma;
let testUserId;

describe('Prisma Client - Tests d\'intégration', () => {
  beforeAll(async () => {
    // Initialiser Prisma
    prisma = new PrismaClient();
  });

  afterAll(async () => {
    // Nettoyer les données de test si nécessaire
    if (testUserId) {
      await prisma.commentaire.deleteMany({ where: { auteurId: testUserId } });
      await prisma.ticket.deleteMany({ where: { utilisateurId: testUserId } });
      await prisma.utilisateur.deleteMany({ where: { id: testUserId } });
    }
    
    // Fermer la connexion
    await prisma.$disconnect();
  });

  describe('Gestion des utilisateurs', () => {
    it('devrait créer un nouvel utilisateur', async () => {
      const userData = {
        id: uuidv4(),
        nom: 'Test Integration User',
        email: `integration-${Date.now()}@example.com`,
        motDePasseHash: 'hashtest123',
        role: 'USER',
        updatedAt: new Date()
      };

      const user = await prisma.utilisateur.create({
        data: userData
      });

      expect(user).toBeDefined();
      expect(user.id).toBe(userData.id);
      expect(user.nom).toBe(userData.nom);
      expect(user.email).toBe(userData.email);
      
      // Sauvegarder l'ID pour le nettoyage
      testUserId = user.id;
    });

    it('devrait récupérer un utilisateur par email', async () => {
      // S'assurer qu'un utilisateur a été créé
      expect(testUserId).toBeDefined();

      const user = await prisma.utilisateur.findFirst({
        where: { email: { contains: 'integration-' } }
      });

      expect(user).toBeDefined();
      expect(user.id).toBe(testUserId);
    });
  });

  describe('Relations entre modèles', () => {
    let ticketId;

    it('devrait créer un ticket lié à un utilisateur', async () => {
      // S'assurer qu'un utilisateur a été créé
      expect(testUserId).toBeDefined();

      const ticketData = {
        id: uuidv4(),
        titre: 'Ticket de test intégration',
        description: 'Description test intégration',
        statut: 'NOUVEAU',
        priorite: 'MOYENNE',
        dateMiseAJour: new Date(),
        utilisateurId: testUserId
      };

      const ticket = await prisma.ticket.create({
        data: ticketData
      });

      expect(ticket).toBeDefined();
      expect(ticket.id).toBe(ticketData.id);
      expect(ticket.utilisateurId).toBe(testUserId);
      
      // Sauvegarder l'ID pour les tests suivants
      ticketId = ticket.id;
    });

    it('devrait récupérer un ticket avec ses relations utilisateur', async () => {
      // S'assurer qu'un ticket a été créé
      expect(ticketId).toBeDefined();

      const ticket = await prisma.ticket.findUnique({
        where: { id: ticketId },
        include: { Utilisateur: true }
      });

      expect(ticket).toBeDefined();
      expect(ticket.id).toBe(ticketId);
      expect(ticket.Utilisateur).toBeDefined();
      expect(ticket.Utilisateur.id).toBe(testUserId);
    });

    it('devrait créer un commentaire lié à un ticket et un utilisateur', async () => {
      // S'assurer qu'un utilisateur et un ticket ont été créés
      expect(testUserId).toBeDefined();
      expect(ticketId).toBeDefined();

      const commentaireData = {
        id: uuidv4(),
        message: 'Commentaire de test intégration',
        ticketId: ticketId,
        auteurId: testUserId
      };

      const commentaire = await prisma.commentaire.create({
        data: commentaireData
      });

      expect(commentaire).toBeDefined();
      expect(commentaire.id).toBe(commentaireData.id);
      expect(commentaire.ticketId).toBe(ticketId);
      expect(commentaire.auteurId).toBe(testUserId);
    });

    it('devrait récupérer un utilisateur avec tous ses tickets et commentaires', async () => {
      // S'assurer qu'un utilisateur a été créé
      expect(testUserId).toBeDefined();

      const user = await prisma.utilisateur.findUnique({
        where: { id: testUserId },
        include: {
          Ticket: true,
          Commentaire: true
        }
      });

      expect(user).toBeDefined();
      expect(user.id).toBe(testUserId);
      expect(user.Ticket).toBeDefined();
      expect(user.Ticket.length).toBeGreaterThanOrEqual(1);
      expect(user.Commentaire).toBeDefined();
      expect(user.Commentaire.length).toBeGreaterThanOrEqual(1);
    });
  });
});
