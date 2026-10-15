# ReNote

ReNote est une application web de prise et d'organisation de notes. Elle
permet à un utilisateur de créer un compte, de gérer ses notes et de les
classer avec des tags depuis une interface dédiée.

L'interface est construite avec React et TypeScript, et communique avec une
API REST pour l'authentification, les notes et les tags.

## Fonctionnalités

- inscription et connexion des utilisateurs ;
- consultation et modification du profil ;
- modification du mot de passe ;
- création et suppression de notes ;
- création et consultation de tags ;
- association de tags aux notes ;
- tableau de bord centralisant les notes et les tags ;
- page de paramètres avec les sections profil, mot de passe et apparence.

## Prérequis

- Node.js 20 ou une version ultérieure ;
- npm 10 ou une version ultérieure ;
- une API ReNote accessible depuis le navigateur.

## Installation

1. Cloner le dépôt puis se placer dans le dossier du front-end :

   ```bash
   git clone <url-du-depot>
   cd front-end
   ```

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Créer le fichier `.env` à partir de l'exemple fourni :

   ```bash
   cp .env.example .env
   ```

4. Renseigner l'URL de l'API dans `.env` :

   ```dotenv
   VITE_API_URL=http://localhost:8000/api
   ```

   `VITE_API_URL` doit pointer vers la racine `/api` de l'API. Le front-end
   ajoute ensuite les chemins correspondant aux ressources, par exemple
   `/login`, `/notes` ou `/tags`.

## Lancement en développement

Démarrer le serveur de développement avec rechargement à chaud :

```bash
npm run dev
```

Vite affiche ensuite l'URL locale, généralement
[`http://localhost:5173`](http://localhost:5173).


## Routes de l'application

| Route | Description |
| --- | --- |
| `/` | Page d'accueil. |
| `/register` | Création d'un compte. |
| `/login` | Connexion. |
| `/dashboard` | Tableau de bord des notes et des tags. |
| `/settings/profile` | Gestion du profil. |
| `/settings/password` | Modification du mot de passe. |
| `/settings/appearance` | Préférences d'apparence. |

## API utilisée

Le client appelle les ressources suivantes à partir de `VITE_API_URL` :

- `POST /register` et `POST /login` pour l'authentification ;
- `POST /logout` et `GET /user` pour la session et l'utilisateur courant ;
- `PUT /user` pour le profil ;
- `PUT /user/password` pour le mot de passe ;
- `GET|POST /notes` et `DELETE /notes/:id` pour les notes ;
- `GET|POST /tags` pour les tags.

Le token de connexion est conservé dans le `localStorage` du navigateur et
est utilisé pour les requêtes nécessitant une authentification. L'API doit
donc autoriser les requêtes provenant de l'origine du serveur Vite en
développement (configuration CORS).

## Structure du projet

```text
src/
├── app/              # Configuration globale du store
├── components/       # Composants réutilisables de l'interface
├── features/         # Services API, types et slices Redux
├── hooks/            # Hooks applicatifs
├── pages/            # Pages et écrans de l'application
├── routes/           # Définition des routes React Router
└── styles/           # Styles globaux
```

## Technologies

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/) et React Redux
- [Tailwind CSS](https://tailwindcss.com/)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter)
