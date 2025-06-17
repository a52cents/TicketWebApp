Generated with [vike.dev/new](https://vike.dev/new) ([version 429](https://www.npmjs.com/package/create-vike/v/0.0.429)) using this command:

```sh
pnpm create vike@latest --react --tailwindcss --shadcn-ui --fastify --prisma
```

## Contents

* [*Prisma*](#prisma)

  * [Setup](#setup)

* [React](#react)

  * [`/pages/+config.ts`](#pagesconfigts)
  * [Routing](#routing)
  * [`/pages/_error/+Page.jsx`](#pages_errorpagejsx)
  * [`/pages/+onPageTransitionStart.ts` and `/pages/+onPageTransitionEnd.ts`](#pagesonpagetransitionstartts-and-pagesonpagetransitionendts)
  * [SSR](#ssr)
  * [HTML Streaming](#html-streaming)

* [shadcn/ui](#shadcnui)

  * [Configuration](#configuration)
  * [Add Components to Your Project](#add-components-to-your-project)

* [Tests et CI/CD](#tests-et-cicd)
  * [Exécuter les Tests](#exécuter-les-tests)
  * [Pipeline CI/CD](#pipeline-cicd)

## *Prisma*

### Setup

Run the following command once:

```sh
pnpx prisma init
```

then follow instructions at <https://www.prisma.io/docs/getting-started/quickstart#2-model-your-data-in-the-prisma-schema>

## React

This app is ready to start. It's powered by [Vike](https://vike.dev) and [React](https://react.dev/learn).

### `/pages/+config.ts`

Such `+` files are [the interface](https://vike.dev/config) between Vike and your code. It defines:

* A default [`<Layout>` component](https://vike.dev/Layout) (that wraps your [`<Page>` components](https://vike.dev/Page)).
* A default [`title`](https://vike.dev/title).
* Global [`<head>` tags](https://vike.dev/head-tags).

### Routing

[Vike's built-in router](https://vike.dev/routing) lets you choose between:

* [Filesystem Routing](https://vike.dev/filesystem-routing) (the URL of a page is determined based on where its `+Page.jsx` file is located on the filesystem)
* [Route Strings](https://vike.dev/route-string)
* [Route Functions](https://vike.dev/route-function)

### `/pages/_error/+Page.jsx`

The [error page](https://vike.dev/error-page) which is rendered when errors occur.

### `/pages/+onPageTransitionStart.ts` and `/pages/+onPageTransitionEnd.ts`

The [`onPageTransitionStart()` hook](https://vike.dev/onPageTransitionStart), together with [`onPageTransitionEnd()`](https://vike.dev/onPageTransitionEnd), enables you to implement page transition animations.

### SSR

SSR is enabled by default. You can [disable it](https://vike.dev/ssr) for all your pages or only for some pages.

### HTML Streaming

You can enable/disable [HTML streaming](https://vike.dev/stream) for all your pages, or only for some pages while still using it for others.

## shadcn/ui

Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.

### Configuration

see [shadcn/ui theming](https://ui.shadcn.com/docs/theming)

Base Configuration can be found in `components.json` file.

> \[!NOTE]
> changes to the `components.json` file **will not** be reflected in existing components. Only new components will be affected.

### Add Components to Your Project

**Example:** add a component to your project.
`pnpm shadcn add button`

use the `<Button />` component in your project:
`import { Button } from "@/components/ui/button";`

more [shadcn/ui components](https://ui.shadcn.com/docs/components/accordion)

## Tests et CI/CD

L'application inclut des tests unitaires et d'intégration, ainsi qu'un pipeline CI/CD avec GitHub Actions.

### Exécuter les Tests

Ce projet utilise Jest pour les tests unitaires et d'intégration. Pour exécuter les tests :

```sh
# Exécuter tous les tests
npm test

# Exécuter les tests en mode watch (pour le développement)
npm run test:watch

# Exécuter les tests avec rapports de couverture
npm run test:coverage

# Exécuter les tests en mode silencieux (utilisé dans CI/CD)
npm run test:quiet
```

### Pipeline CI/CD

Le projet est configuré avec GitHub Actions pour l'intégration continue et le déploiement continu. Le workflow est défini dans `.github/workflows/ci.yml` et comprend :

1. **Tests et Build** : Cette étape :
   - Installe les dépendances
   - Génère le client Prisma
   - Exécute les tests unitaires et d'intégration
   - Construit l'application
   - Archive les artefacts de build pour l'étape de déploiement

2. **Déploiement** : Cette étape :
   - Ne s'exécute que pour les pushes sur la branche main (pas pour les pull requests)
   - Récupère les artefacts de build
   - Déploie l'application en production

### Configuration du CI/CD

Pour configurer complètement le déploiement, vous devez :

1. Remplacer l'étape de déploiement par votre méthode de déploiement préférée :
   - Vercel : `vercel --prod`
   - Netlify : `netlify deploy --prod`
   - Déploiement sur serveur via SSH

2. Ajouter les secrets nécessaires dans les paramètres de votre dépôt GitHub :
   - Aller dans `Settings > Secrets and variables > Actions`
   - Ajouter les secrets comme `VERCEL_TOKEN`, `NETLIFY_AUTH_TOKEN`, etc.

### Status Badge

[![CI/CD Pipeline](https://github.com/{votre-username}/TicketApp/actions/workflows/ci.yml/badge.svg)](https://github.com/{votre-username}/TicketApp/actions/workflows/ci.yml)

Remplacez `{votre-username}` par votre nom d'utilisateur GitHub pour voir le status badge.

