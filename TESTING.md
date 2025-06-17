# Tests de l'application Ticket

Ce document explique comment configurer et exécuter les tests unitaires et d'intégration pour l'application de tickets.

## Configuration

1. Installer les dépendances de test:

```bash
node install-test-deps.js
```

2. Mettre à jour le fichier `package.json` en ajoutant les scripts suivants dans la section "scripts":

```json
"test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
"test:watch": "node --experimental-vm-modules node_modules/jest/bin/jest.js --watch",
"test:coverage": "node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage"
```

## Structure des tests

Les tests sont organisés dans deux catégories:

- **Tests unitaires**: Situés dans le dossier `__tests__/unit/`. Ces tests vérifient le bon fonctionnement des composants individuels de l'application en isolation.
  
- **Tests d'intégration**: Situés dans le dossier `__tests__/integration/`. Ces tests vérifient comment les différents composants interagissent entre eux.

## Exécuter les tests

Pour exécuter tous les tests:

```bash
npm test
```

Pour exécuter les tests en mode watch (relance automatiquement les tests lorsque les fichiers sont modifiés):

```bash
npm run test:watch
```

Pour générer un rapport de couverture des tests:

```bash
npm run test:coverage
```

Pour exécuter un fichier de test spécifique:

```bash
npm test -- __tests__/unit/ticketService.test.js
```

## Configuration CI/CD

Un workflow GitHub Actions a été configuré dans le fichier `.github/workflows/ci.yml`. Ce workflow s'exécute automatiquement à chaque push sur la branche `main` et:

1. Installe les dépendances
2. Génère le client Prisma
3. Exécute les tests
4. Construit l'application
5. Déploie l'application (uniquement sur la branche main)

## Environnement de test

Les tests utilisent une base de données SQLite en mémoire ou un fichier séparé pour éviter d'affecter les données de développement ou de production. La configuration se trouve dans le fichier `jest.setup.js`.

## Tests unitaires inclus

1. `ticketService.test.js` - Teste les fonctions du service de tickets
2. `utils.test.js` - Teste les fonctions utilitaires

## Tests d'intégration inclus

1. `ticket-api.test.js` - Teste les routes API des tickets
2. `prisma-client.test.js` - Teste les interactions avec la base de données via Prisma

## Bonnes pratiques

- Écrire des tests pour chaque nouvelle fonctionnalité
- Exécuter les tests avant chaque commit
- Maintenir une couverture de test élevée
- Isoler les dépendances externes (base de données, API externes) dans les tests unitaires

## Dépannage

Si vous rencontrez des problèmes avec les tests:

1. Vérifiez que toutes les dépendances sont installées
2. Assurez-vous que la base de données de test est correctement configurée
3. Consultez les logs d'erreur pour plus de détails
