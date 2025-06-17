// __tests__/unit/ticketService.test.js
import { jest, describe, expect, it, beforeEach } from '@jest/globals';

// Fonctions mock
const mockTicketCreate = jest.fn();
const mockTicketFindMany = jest.fn();
const mockTicketUpdate = jest.fn();
const mockTicketDelete = jest.fn();
const mockTicketFindUnique = jest.fn();
const mockUtilisateurFindFirst = jest.fn();
const mockUuidV4 = jest.fn();

// Définir les mocks avant d'importer les modules qui les utilisent
jest.unstable_mockModule('../../lib/prismaClient.js', () => ({
  default: {
    ticket: {
      create: mockTicketCreate,
      findMany: mockTicketFindMany,
      findUnique: mockTicketFindUnique,
      update: mockTicketUpdate,
      delete: mockTicketDelete,
    },
    utilisateur: {
      findFirst: mockUtilisateurFindFirst,
    },
  }
}));

jest.unstable_mockModule('uuid', () => ({
  v4: mockUuidV4
}));

// Importer le module à tester
const TicketServicePromise = import('../../lib/ticketService.js');

// On doit attendre que le module soit importé dans les tests
let TicketService;

describe('TicketService', () => {
  // Conserver les méthodes console originales
  let originalConsoleLog;
  let originalConsoleError;

  // Supprimer les logs pendant les tests
  beforeAll(() => {
    originalConsoleLog = console.log;
    originalConsoleError = console.error;
    console.log = jest.fn();
    console.error = jest.fn();
  });

  // Restaurer les méthodes console après les tests
  afterAll(() => {
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
  });

  // Configurer les modules avant chaque test
  beforeEach(async () => {
    jest.clearAllMocks();
    mockUuidV4.mockReturnValue('mocked-uuid');

    // Importer le module à tester (après les mocks)
    const module = await TicketServicePromise;
    TicketService = module.default;
  });

  describe('createTicket', () => {
    it('devrait créer un ticket avec des valeurs par défaut', async () => {
      // Arrange
      const ticketData = { titre: 'Test Ticket' };
      const mockUser = { id: 'user-1', email: 'test@example.com' };
      const mockTicket = {
        id: 'mocked-uuid',
        titre: 'Test Ticket',
        description: '',
        priorite: 'MOYENNE',
        statut: 'NOUVEAU'
      };
      // Mocks pour Prisma
      mockUtilisateurFindFirst.mockResolvedValue(mockUser);
      mockTicketCreate.mockResolvedValue(mockTicket);

      // Act
      const result = await TicketService.createTicket(ticketData);

      // Assert
      expect(mockUtilisateurFindFirst).toHaveBeenCalled();
      expect(mockTicketCreate).toHaveBeenCalledWith({
        data: expect.objectContaining({
          id: 'mocked-uuid',
          titre: 'Test Ticket',
          description: '',
          priorite: 'MOYENNE',
          statut: 'NOUVEAU',
          utilisateurId: 'user-1'
        })
      });
      expect(result).toEqual(mockTicket);
    });

    it('devrait lever une erreur si le titre est manquant', async () => {
      // Arrange
      const ticketData = { description: 'Description sans titre' };

      // Act & Assert
      await expect(TicketService.createTicket(ticketData))
        .rejects
        .toThrow('Le titre du ticket est obligatoire');

      expect(mockTicketCreate).not.toHaveBeenCalled();
    });
  });

  describe('getAllTickets', () => {
    it('devrait récupérer tous les tickets avec les informations de l\'utilisateur', async () => {
      // Arrange
      const mockTickets = [
        { id: '1', titre: 'Premier ticket', utilisateurId: 'user-1' },
        { id: '2', titre: 'Second ticket', utilisateurId: 'user-2' }
      ];
      mockTicketFindMany.mockResolvedValue(mockTickets);

      // Act
      const result = await TicketService.getAllTickets();

      // Assert
      expect(mockTicketFindMany).toHaveBeenCalledWith({
        orderBy: { dateCreation: 'desc' },
        include: {
          Utilisateur: {
            select: { nom: true }
          }
        }
      });
      expect(result).toEqual(mockTickets);
    });
  });

  // Tests pour updateTicket
  describe('updateTicket', () => {
    it('devrait mettre à jour un ticket existant', async () => {
      // Arrange
      const ticketId = '1';
      const updateData = {
        titre: 'Titre mis à jour',
        description: 'Description mise à jour'
      };
      const mockUpdatedTicket = {
        id: '1',
        titre: 'Titre mis à jour',
        description: 'Description mise à jour',
        dateMiseAJour: new Date()
      }; mockTicketUpdate.mockResolvedValue(mockUpdatedTicket);

      // Act
      const result = await TicketService.updateTicket(ticketId, updateData);

      // Assert
      expect(mockTicketUpdate).toHaveBeenCalledWith({
        where: { id: ticketId },
        data: expect.objectContaining({
          ...updateData,
          dateMiseAJour: expect.any(Date)
        })
      });
      expect(result).toEqual(mockUpdatedTicket);
    });
  });

  // Tests pour deleteTicket
  describe('deleteTicket', () => {
    it('devrait supprimer un ticket existant', async () => {
      // Arrange
      const ticketId = '1';
      const mockDeletedTicket = {
        id: '1',
        titre: 'Ticket supprimé'
      }; mockTicketDelete.mockResolvedValue(mockDeletedTicket);

      // Act
      const result = await TicketService.deleteTicket(ticketId);

      // Assert
      expect(mockTicketDelete).toHaveBeenCalledWith({
        where: { id: ticketId }
      });
      expect(result).toEqual(mockDeletedTicket);
    });
  });
});
