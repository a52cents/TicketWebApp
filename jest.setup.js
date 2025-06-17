// jest.setup.js
// Ce fichier sera exécuté avant les tests

process.env.DATABASE_URL = "file:./test.db";
process.env.NODE_ENV = "test";
