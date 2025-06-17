
/** @type {import('jest').Config} */
export default {
  // Environnement node pour les tests
  testEnvironment: 'node',

  // Extensions à traiter comme ESM - uniquement les fichiers TypeScript
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.mts'],

  // Configure comment résoudre les imports
  moduleNameMapper: {
    '^(\\.\\.?\\/.*)\\.js$': '$1'
  },

  // Patterns pour trouver les tests
  testMatch: [
    '**/__tests__/**/*.test.(js|ts)',
    '**/?(*.)+(spec|test).(js|ts)'
  ],  // Ce qu'il faut ignorer
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  // Configuration de couverture
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'lib/**/*.{js,ts}',
    'server/**/*.{js,ts}',
    '!**/node_modules/**'
  ],

  // Réduire les logs des tests
  // 0 = afficher tous les logs, 1 = ne montrer que les erreurs, 2 = silencieux
  // Décommentez la ligne suivante pour supprimer totalement les logs
  // silent: true,

  // Ne pas transformer, on utilise native ESM
  transform: {}
};
