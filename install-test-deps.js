// Script pour installer les dépendances de test
// Exécuter avec: node install-test-deps.js

import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

console.log('Installation des dépendances de test...');

// Liste des dépendances de test
const devDependencies = [
  'jest',
  '@jest/globals',
  '@types/jest',
  'jest-environment-node',
  'supertest',
  '@types/supertest'
];

// Commande d'installation
const installCmd = `npm install --save-dev ${devDependencies.join(' ')}`;

try {
  // Exécution de la commande
  execSync(installCmd, { stdio: 'inherit' });

  // Créer la configuration Jest
  const jestConfig = `
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.\\.?\\/.+)\\.js$': '$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }]
  },
  testMatch: [
    '**/__tests__/**/*.test.(ts|js)',
    '**/?(*.)+(spec|test).(ts|js)'
  ],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'lib/**/*.{js,ts}',
    'server/**/*.{js,ts}',
    '!**/node_modules/**'
  ]
};
  `;

  writeFileSync('./jest.config.js', jestConfig);

  // Mettre à jour package.json avec les scripts de test
  const packageJsonUpdates = `
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
    "test:watch": "node --experimental-vm-modules node_modules/jest/bin/jest.js --watch",
    "test:coverage": "node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage"
  }
  `;

  console.log('Installation terminée!');
  console.log('Veuillez ajouter ces lignes à votre package.json:');
  console.log(packageJsonUpdates);

} catch (error) {
  console.error('Erreur lors de l\'installation:', error);
  process.exit(1);
}
