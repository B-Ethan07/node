# Initialisation du projet Node.js

Ce projet a pour but de servir de base pour une application Node.js. Suivez les étapes ci-dessous pour bien configurer l’environnement.

---

## À faire pour initialiser le projet

- [x] Créer le dépôt GitHub
- [x] Cloner le dépôt :
  ```bash
  git clone https://github.com/B-Ethan07/node.git
  cd node
  ```
- [x] Initialiser le projet avec npm :
  ```bash
  npm init 
  ```
- [x] Créer un fichier d’entrée :
  ```bash
  touch index.js
  ```
- [x] Installer les dépendances nécessaires (Chalk) :
  ```bash
  npm install chalk
  ```
- [x] Créer un fichier `.gitignore` :
  ```
  node_modules
  .env
  ```
- [ ] Ajouter un script `start` dans `package.json` :
  ```json
  "scripts": {
    "start": "node index.js"
  }
  ```

---

## Structure du projet (exemple)

```
node/
├── index.js
├── package.json
├── .gitignore
└── README.md
```

---

## Lancer le projet

```bash
npm start
```


