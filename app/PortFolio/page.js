import Navbar from '../components/Navbar';
import ProjectBubble from "./components/ProjectBubble";
import styles from "./Home.module.css";

export default function PortFolio() {
  return (
    <div>
      <Navbar />
      <h1 className={styles.title}>Mon Portfolio</h1>

      {/* Deuxième partie : Projets réalisés dans le cadre professionnel */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projets réalisés dans le cadre professionnel</h2>

        <ProjectBubble
          title="Système multi-IA pour maintenance 4.0"
          summary="Stage de fin d’études de 6 mois au sein de la Direction Innovation chez Alten, axé sur le développement d’un système multi-IA pour la maintenance prescriptive dans une mini-usine 4.0."
          details="J’ai participé à la création d’un système multi-IA capable de prédire les pannes dans un environnement industriel simulé. Après une phase d’étude rapide pour identifier les modèles les plus adaptés, j’ai conçu des architectures IA sous TensorFlow, traité les signaux et les données, puis entraîné et validé les modèles. J’ai également encadré une petite équipe, en assurant la répartition des tâches et le suivi via Azure DevOps, dans un cadre agile."
          skills={[
            "IA appliquée à l'industrie",
            "TensorFlow",
            "Traitement de signal et données",
            "Méthode Agile (Azure DevOps)",
            "Encadrement technique"
          ]}
          links={[]}
          images={["/images/At.jpeg","/images/At1.jpeg","/images/At2.jpeg"]}
        />


        <ProjectBubble
          title="Simplification et amélioration d'une CNC"
          summary="Stage de 4 mois au sein de la DSI, axé sur la simplification de l'utilisation d'une CNC avec un code propriétaire et l'amélioration de ses capacités."
          details="Lors de ce stage, ma mission principale a été de rendre une CNC utilisant un code de contrôle propriétaire compatible avec le G-code standard. J'ai développé une application Python, utilisant Tkinter, compatible avec Linux et Windows, pour simplifier son usage. J'ai également amélioré la machine en augmentant sa taille de découpe et en ajoutant une fonctionnalité de découpe laser. En parallèle, j'ai participé à l'entretien d'une machine de découpe de verre, notamment en identifiant et résolvant une panne."
          skills={[
            "Développement Python",
            "Compatibilité multi-plateforme", 
            "Maintenance industrielle",
            "Amélioration de CNC"
          ]}
          links={[
            { label: "Projet GitHub", url: "https://github.com/PaulQuiDev/gcodeToIselCPM" },
          ]}
          images={["/images/Aff3.jpeg", "/images/Aff2.jpeg" , "/images/Aff.mp4" , "/images/Aff.jpeg" , "/images/Aff2.mp4" , "/images/Aff3.mp4" , "/images/Aff1.jpeg" ]}
        />

          <ProjectBubble
            title="Campagne de financement et création de dessous de verre modulables"
            summary="Création d'une campagne de financement express pour concevoir des dessous de verre modulables à partir de chutes de cuir issues de l'industrie du luxe."
            details="En équipe de quatre, nous avons mené une campagne de financement express inspirée de Kickstarter sur un mois. Le projet consistait à concevoir des dessous de verre emboîtables, pouvant se transformer en chemins de table ou dessous de plats. Nous avons prototypé pour trouver la forme idéale, fabriqué un emporte-pièce, acheté et découpé le cuir, et réalisé un fer de marquage à chaud pour personnaliser les produits. Nous avons également mené une campagne de communication efficace. Le projet a été un succès, générant des bénéfices et validant notre concept."
            skills={[
              "Gestion de projet",
              "Prototypage produit",
              "Travail du cuir",
              "Marketing et communication",
              "Organisation de campagne de financement"
            ]}
            links={[]} // Tu pourras ajouter tes liens ici
            images={["/images/kik.jpeg","/images/kik1.jpeg","/images/kik2.jpeg","/images/kik3.jpeg","/images/kik4.jpeg","/images/kik5.jpeg","/images/kik6.jpeg","/images/kik7.jpeg","/images/kik8.mp4","/images/kik9.jpeg","/images/kik10.jpeg","/images/kik11.jpeg","/images/kik12.mp4","/images/kik13.jpeg","/images/kik.jpeg14","/images/kik.jpeg15","/images/kik16.mp4","/images/kik17.jpeg","/images/kik18.jpeg","/images/kik19.jpeg","/images/kik20.jpeg"]} // Tu pourras ajouter tes images ici
          />
        
      </section>


      {/* Première partie : Projets réalisés dans le cadre scolaire */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projets réalisés dans le cadre scolaire</h2>
        
        <ProjectBubble
          title="Circuits interactifs en cuivre par anodisation"
          summary="Développement d'une méthode alternative et économique pour créer des circuits interactifs en utilisant de la peinture au graphite et l'anodisation du cuivre."
          details="Inspiré par les travaux de recherche de Clément Zheng, ce projet visait à remplacer la peinture métallique conductrice par une peinture au graphite, suivie d'une anodisation du cuivre, pour réduire les coûts de fabrication. J'ai contribué à tester différentes peintures pour déterminer la meilleure option en termes d'adhérence et de conductivité. Pour valider ce concept, j'ai réalisé un prototype : un pot de fleurs capable de mesurer l'humidité de la terre et d'indiquer quand arroser sans risquer de la noyer."
          skills={[ "Recherche et développement", "Test de matériaux","Fabrication de circuits interactifs","Prototypage "  ]}
          links={[
            { label: "travaux de recherche Clément Zheng", url: "https://clementzheng.info/Crafting-Ceramic-Circuits" },
          ]}
          images={["/images/Cu.jpeg", "/images/Cu1.jpeg" , "/images/Cu2.jpeg"  , "/images/Cu3.mp4" , "/images/Cu4.jpeg" , "/images/Cu5.jpeg" , "/images/Cu6.jpeg" , "/images/Cu7.jpeg" , "/images/Cu8.jpeg" , "/images/Cu9.jpeg" ]}
        />
        <ProjectBubble
            title="Création d'une mini Gameboy connectée"
            summary="Conception d'un PCB avec ESP32-C3, assemblage électronique et réalisation d'une mini Gameboy avec communication ESP-NOW."
            details="Dans ce projet réalisé en équipe de trois, nous avons conçu un PCB pour intégrer une ESP32-C3, avec soudure de composants SMD et THT. Le projet a abouti à la création d'une mini Gameboy comprenant un mini-jeu. La communication entre appareils se fait grâce au protocole ESP-NOW. Nous avons également prototypé et imprimé les éléments physiques, tels que le boîtier de protection et les boutons, pour un produit final fonctionnel et esthétique."
            skills={[
              "Conception PCB",
              "Soudure SMD et THT",
              "Programmation ESP32",
              "Prototypage"
            ]}
            links={[]} // Tu pourras ajouter tes liens ici
            images={["/images/game.jpeg","/images/game1.jpeg","/images/game2.jpeg","/images/game3.jpeg","/images/game4.jpeg","/images/game5.jpeg",]} // Tu pourras ajouter tes images ici
          />

        <ProjectBubble
          title="Imprimante 3D à argile sableuse"
          summary="Réalisation d'une imprimante 3D capable d'extruder de l'argile sableuse, avec des améliorations sur la sécurité, l'électronique, et l'extrusion."
          details="Dans ce projet réalisé en équipe de trois, j'ai été responsable de la mise à jour des branchements et de l'isolation de l'électronique pour mieux protéger le matériel des éclaboussures et de la poussière. J'ai également ajouté des sécurités électriques comme un boîtier de chantier avec disjoncteurs. En parallèle, j'ai amélioré le système d'extrusion en changeant le cône d'extrusion, et j'ai mis à jour le firmware pour permettre un contrôle complet de l'imprimante via téléphone. Désormais, la page web Octoprint permet de modifier directement les fichiers de configuration de la machine."
          skills={[
            "Travail d'équipe",
            "Électronique",
            "Mise à jour de firmware",
            "Amélioration mécanique",
            "Configuration de systèmes connectés" ]}
          links={[   ]}
          images={["/images/Argil.mp4", "/images/Argil1.jpeg" , "/images/Argil2.jpeg"  , "/images/Argil3.jpeg" , "/images/Argil4.jpeg" , "/images/Argil5.jpeg" , "/images/Argil6.jpeg" , "/images/Argil7.jpeg"  ]}
        />

      </section>


      {/* Troisième partie : Projets personnels */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projets personnels</h2>
        
        <ProjectBubble
          title="Expérimentations d'IA générative en local"
          summary="Installation et utilisation de modèles d'IA générative open source pour le texte, les images et les vidéos"
          details="Dans ce projet, j’ai exploré des modèles d’IA générative exécutés en local, notamment pour la création d’images et de vidéos à l’aide de solutions comme A1111, ComfyUI et FramePack. Une veille active sur les modèles open source m’a permis d’identifier les outils les plus pertinents. J’ai configuré et optimisé leurs paramètres de génération, modifié les requêtes API pour des options par défaut personnalisées, et expérimenté l’exécution locale de LLM. Pour exploiter ces technologies de manière fluide, j’ai assemblé un PC sur mesure orienté IA."
          skills={[
            "Installation de modèles IA en local",
            "Veille open source",
            "Optimisation des paramètres API",
            "Génération d'images et vidéos",
            "Implémentation locale de LLM",
            "Assemblage de matériel informatique"
          ]}
          links={[
            { label: "GitHub A1111", url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui" },
            { label: "GitHub ComfyUI", url: "https://github.com/comfyanonymous/ComfyUI" },
            { label: "Github FramePack" , url:"https://github.com/lllyasviel/FramePack"}
          ]}
          images={["/images/Defforum.mp4", "/images/IA.jpeg", "/images/IA.mp4", "/images/IA1.jpeg", "/images/IA2.mp4", "/images/IA3.mp4", "/images/PC.jpeg" , "/images/PC1.jpeg"]}
        />


        <ProjectBubble
          title="Optimisation d'une imprimante 3D FDM"
          summary="Amélioration d'une Creality Ender 3 pour la rendre plus fiable, performante et pilotable à distance."
          details="Ce projet a consisté à optimiser une imprimante 3D Creality Ender 3 en remplaçant la carte mère, en intégrant une Raspberry Pi pour un pilotage à distance via une page web Octoprint, et en ajoutant une caméra pour un retour visuel. J'ai également amélioré la tête d'impression avec un nouvel extrudeur, remplacé le plateau pour une meilleure adhérence et fiabilité, et effectué une mise à niveau des moteurs pour améliorer les performances globales. Ces modifications ont permis de fiabiliser l'imprimante et d'élargir ses capacités."
          skills={[
            "Linux et SSH",
            "Optimisation matérielle",
            "Pilotage à distance",
            "Modification et maintenance d'imprimantes 3D"
          ]}
          links={[]} // Tu pourras ajouter tes liens ici
          images={["/images/print.jpeg" ,"/images/print1.jpeg" ,"/images/print2.jpeg" ,"/images/print3.jpeg" ,"/images/print4.jpeg" ,"/images/print5.jpeg" ]} // Tu pourras ajouter tes images ici
        />


      </section>
    </div>
  );
}
