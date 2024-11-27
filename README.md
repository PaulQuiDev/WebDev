# Portfolio - CV en HTML Basique

## Contexte du Projet
Dans le cadre d'un projet scolaire, j'ai réalisé un CV portfolio en HTML basique pour me présenter et exposer mes projets. Ce portfolio a été conçu de manière évolutive afin de pouvoir facilement y intégrer de futurs projets.

## Fonctionnalités

### Composant Navbar
- Une barre de navigation facilitant l'accès aux différentes sections de mon portfolio.
- Permet de télécharger directement une version PDF de mon CV.

### Module ProjectBubble
Pour simplifier l'ajout et la présentation de mes projets, j'ai développé un module nommé **ProjectBubble**. Ce composant fonctionne de la manière suivante :

```jsx
<ProjectBubble
  title="Titre du projet"
  summary="Résumé du projet"
  details="Description détaillée du projet"
  skills={["Compétence 1", "Compétence 2"]}
  links={[{ label: "Projet GitHub", url: "https://github.com/PaulQuiDev/gcodeToIselCPM" },]}
  images={["/images/image1.jpeg", "/images/image2.jpeg"]}
/>
```

#### Fonctionnalités du module :
- Présentation des projets avec un titre, un résumé, des détails, une liste de compétences utilisées, des liens associés et des médias (images/vidéos).
- **Bouton "Plus de détails"** : Permet d'afficher des informations supplémentaires pour chaque projet.
- **Défilement des médias** :
  - Durée minimale de 2 secondes par média.
  - Ajout d'un délai aléatoire (entre 1 et 3 secondes) pour désynchroniser le défilement des médias.
  - Détection automatique de l'absence de médias pour éviter tout crash.

### Responsive Design
Le portfolio a été testé et adapté pour :
- **Ordinateurs** : Placement optimisé des éléments.
- **Mobiles** : Réduction des besoins en scrolling grâce à l'organisation en bulles de projet avec détails repliables.

## Limitations
- **Temps de chargement des médias** : L'utilisation de l'hébergeur gratuit Vercel rallonge le chargement des images (3 à 5 secondes contre 0,07 seconde en local).

## Hébergement
Le portfolio est hébergé gratuitement sur **Vercel**, offrant une accessibilité en ligne facile tout en permettant des ajustements futurs.

---

Ce projet est une base solide que je compte enrichir avec mes prochaines réalisations. N'hésitez pas à parcourir mes projets et à me contacter pour toute question ou collaboration !

