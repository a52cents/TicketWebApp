// __tests__/unit/utils.test.js
import { describe, expect, it } from '@jest/globals';

// Créer un module utilitaire simulé pour les tests
// Dans un projet réel, vous importeriez vos fonctions utilitaires réelles
const utils = {
  formatDate: (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  },

  getStatusColor: (status) => {
    const statusMap = {
      'NOUVEAU': 'blue',
      'EN_COURS': 'orange',
      'RESOLU': 'green',
      'FERME': 'gray'
    };
    return statusMap[status] || 'blue';
  },

  getPriorityLabel: (priority) => {
    const priorityMap = {
      'BASSE': 'Basse',
      'MOYENNE': 'Moyenne',
      'HAUTE': 'Haute'
    };
    return priorityMap[priority] || 'Non définie';
  },

  validateEmail: (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
};

describe('Utilitaires', () => {
  describe('formatDate', () => {
    it('devrait formater correctement une date', () => {
      // Arrangement
      const date = new Date('2025-06-17T10:30:00');

      // Action
      const formattedDate = utils.formatDate(date);

      // Assertion
      expect(formattedDate).toMatch(/17 juin 2025/);
      expect(formattedDate).toMatch(/10:30/);
    });

    it('devrait retourner une chaîne vide pour une date null ou undefined', () => {
      expect(utils.formatDate(null)).toBe('');
      expect(utils.formatDate(undefined)).toBe('');
    });
  });

  describe('getStatusColor', () => {
    it('devrait retourner la bonne couleur pour chaque statut', () => {
      expect(utils.getStatusColor('NOUVEAU')).toBe('blue');
      expect(utils.getStatusColor('EN_COURS')).toBe('orange');
      expect(utils.getStatusColor('RESOLU')).toBe('green');
      expect(utils.getStatusColor('FERME')).toBe('gray');
    });

    it('devrait retourner blue pour un statut inconnu', () => {
      expect(utils.getStatusColor('INCONNU')).toBe('blue');
    });
  });

  describe('validateEmail', () => {
    it('devrait valider les adresses email correctes', () => {
      expect(utils.validateEmail('utilisateur@exemple.com')).toBe(true);
      expect(utils.validateEmail('utilisateur.nom@domaine.co.fr')).toBe(true);
    });

    it('devrait rejeter les adresses email incorrectes', () => {
      expect(utils.validateEmail('utilisateur@')).toBe(false);
      expect(utils.validateEmail('utilisateur@domaine')).toBe(false);
      expect(utils.validateEmail('utilisateur.domaine.com')).toBe(false);
      expect(utils.validateEmail('')).toBe(false);
    });
  });
});
