# Portfolio — Esso-Manam MANGANMANA

Portfolio de Data Scientist en HTML/CSS/JS pur (aucune étape de build), prêt pour GitHub Pages.

## Structure

```
/
├── index.html               # Contenu de toutes les sections
├── .nojekyll                # Sert les fichiers tels quels sur GitHub Pages
└── assets/
    ├── css/style.css        # Styles + palette de couleurs (variables en haut du fichier)
    ├── js/script.js         # Navigation, thème, compteurs, filtres, formulaire
    ├── documents/           # CV en PDF
    └── images/              # Photo de profil et captures de projets
```

## Fonctionnalités

- Navigation par sections (Accueil, À propos, Projets, Contact) avec boutons latéraux
  (barre inférieure sur mobile) et ancres dans l'URL (`#about`, `#portfolio`…)
- Thème sombre / clair mémorisé dans le navigateur
- Compteurs animés, barres de compétences animées, effet machine à écrire
- Timeline expérience et formation
- Grille de projets avec filtres par catégorie et survol interactif
- Formulaire de contact qui ouvre le client mail (pas de serveur requis)

## Personnaliser

- **Photo** : remplace `assets/images/profile.webp` (photo détourée, fond transparent, 800×800).
- **Projets** : copie un bloc `.portfolio-item` dans `index.html` ; remplace les liens `https://github.com/` par tes dépôts.
- **Couleurs** : modifie `--accent` / `--accent-2` en haut de `assets/css/style.css` (thème sombre) et dans `.light-mode` (thème clair).
- **Compétences** : change le pourcentage affiché et la valeur `--w` de chaque barre.

## Déployer sur GitHub Pages

```bash
git remote add origin https://github.com/<UTILISATEUR>/<UTILISATEUR>.github.io.git
git push -u origin main
```

Puis sur GitHub : *Settings → Pages → Source : Deploy from a branch → `main` / `(root)`*.
Le site sera en ligne sur `https://<UTILISATEUR>.github.io/` après une minute environ.
