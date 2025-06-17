// __tests__/prisma-test-environment/prisma-test-environment.js
import NodeEnvironment from 'jest-environment-node';
import { execSync } from 'child_process';
import { join } from 'path';
import { randomUUID } from 'crypto';
import { fileURLToPath } from 'url';
import { existsSync, unlinkSync, mkdirSync } from 'fs';
import { mkdir } from 'fs/promises';

// Récupère le dossier actuel pour ce module ES
const __dirname = fileURLToPath(new URL('.', import.meta.url));

class PrismaTestEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);

    // Génère un schéma unique pour ce test
    this.schema = `test_${randomUUID()}`;
    this.dbUrl = `file:${join(__dirname, '..', '..', 'prisma', `${this.schema}.db`)}`;
    
    // Définir la variable d'environnement pour Prisma
    process.env.DATABASE_URL = this.dbUrl;
  }

  async setup() {
    // Assure-toi que le dossier prisma existe
    const prismaDir = join(__dirname, '..', '..', 'prisma');
    if (!existsSync(prismaDir)) {
      await mkdir(prismaDir, { recursive: true });
    }
    
    // Configure Prisma
    process.env.DATABASE_URL = this.dbUrl;
    
    // Exécute les migrations Prisma
    execSync(`npx prisma migrate deploy`, {
      env: {
        ...process.env,
        DATABASE_URL: this.dbUrl,
      },
    });

    return super.setup();
  }

  async teardown() {
    // Nettoie la base de données de test
    try {
      if (this.dbUrl) {
        const dbFile = this.dbUrl.replace('file:', '');
        if (existsSync(dbFile)) {
          unlinkSync(dbFile);
        }
      }
    } catch (error) {
      console.error("Erreur lors du nettoyage de la base de test:", error);
    }

    return super.teardown();
  }
}

export default PrismaTestEnvironment;
