// prismaClient.js - Wrapper compatible ESM et CommonJS
// Solution pour éviter les erreurs "exports is not defined"

import { PrismaClient } from '@prisma/client';

// Fonction pour éviter de créer des instances multiples en développement
function getPrismaClient() {
    // En développement, garde une seule instance
    if (process.env.NODE_ENV === 'development') {
        if (!global.prisma) {
            global.prisma = new PrismaClient();
        }
        return global.prisma;
    }

    // En production, crée une nouvelle instance
    return new PrismaClient();
}

export default getPrismaClient();
