## Démarrage du projet

L'utilisation de l'application nécessite la création d'un compte développeur Spotify et la création d'une application sur le dashboard de votre profil.

- Lien vers la doc: [https://developer.spotify.com/documentation/web-api](https://developer.spotify.com/documentation/web-api)
- Mettre l'url de site en http://localhost:3000
- Mettre l'url de callback en http://localhost:3000/callback

```bash
git clone git@github.com:OrhanMA/Simplon-MyMusic.git
cd Simplon-MyMusic/
npm i
npm run dev
```

Créer un fichier .env.local en y mettant les informations suivantes:

```
SPOTIFY_BASE_URL="https://api.spotify.com/v1/"
SPOTIFY_TOKEN_URL="https://accounts.spotify.com/api/token"
SPOTIFY_USER_ID=<SPOTIFY_CLIENT_ID>
SPOTIFY_USER_SECRET=<SPOTIFY_SECRET_ID>
```

Ouvrir le localhost: [http://localhost:3000](http://localhost:3000)

## À propos du projet

Stack technique:

- Next.js / React
- Tailwind pour le CSS

Dépendances:

- React icons pour les icons
- Axios pour les requêtes

## Contexte

- Création d'un clone de Spotify en utilisant son API.
- Utilisation de Next.js comme techno.
- Fonctionnalité de recherche et de page de détails pour les recherches de l'utilisateur.
