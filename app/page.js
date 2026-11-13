"use client"; 
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from './components/Navbar';
import { useState, useEffect } from "react";

export default function Home() {

  const [imageSize, setImageSize] = useState(120); // Taille initiale de l'image

  useEffect(() => {
    const handleScroll = () => {
      const newSize = 120 + window.scrollY / 30; // Ajustez le ratio pour contrôler la vitesse de croissance
      setImageSize(Math.min(newSize, 250)); // Limite de taille maximale
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />  {/* Ajoute la barre de navigation ici */}
      <div className={styles.container}>
        {/* Bloc de contact à gauche */}
        <div className={styles.sidebar}>
        <Image 
            src="/images/moi.jpeg" 
            alt="Ma photo" 
            width={imageSize} 
            height={imageSize} 
            className={styles.profileImage} 
            style={{ width: imageSize, height: imageSize }} // Styles en ligne pour agrandir
          />

          <h2>CONTACT</h2>
          <p>TÉLÉPHONE : 06 71 08 10 55</p>
          <p>ADRESSE : Courbevoie</p>
          <p>E-MAIL : paul.raguet@edu.devinci.fr</p>
          <a href="https://fr.linkedin.com/in/paul-raguet-bb24aa2b4" > LinkedIn </a>
          <br></br>
          <a href="https://github.com/PaulQuiDev" > GitHub </a>
          
          <h2>SKILLS</h2>
          <ul>  
            <li><strong>IA :</strong> TensorFlow, CNN/RNN, LLM open-source, IA générative locale, traitement du signal</li>
            <li><strong>Programmation :</strong> Python, C++, C#</li>
            <li><strong>Systèmes :</strong> Linux (Debian), Docker, Profinet, TCP/IP, SSH</li>
            <li><strong>Industrie :</strong> OPC UA, InfluxDB, maintenance industrielle</li>
            <li><strong>Hardware :</strong> PCB (ESP32, KiCad), IoT (ESP-NOW), Impression 3D</li>
            <li><strong>Outils :</strong> Git, Azure DevOps</li>
          </ul>
        </div>
        <div className={styles.mainContent}>
        {/* Section d'introduction */}
        <section className={styles.section}>
          <h1 className={styles.title}>Paul Raguet </h1>
          <p className={styles.subTitle}>
            Ingénieur diplômé orienté <strong>IA appliquée aux systèmes industriels</strong> (ESILV — Creative Technology). Expérience significative chez Airbus : IA générative locale, intégration Linux, réseaux industriels &amp; systèmes embarqués. Profil technique &amp; polyvalent, appétence pour la R&amp;D et le prototypage rapide.
          </p>
        </section>

        {/* Formation */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Formation</h2>
          <p><strong className={styles.miniTitle} >2020–2025 – Pôle Léonard de Vinci, Ecole d'ingénieur ESILV</strong>, en majeure créative technologie</p>
          <p><strong className={styles.miniTitle} >2022 – 6 mois – Échange Erasmus RTU</strong> (Riga Technologic Université) Lettonie</p>
        </section>

        <hr className={styles.divider} />

        {/* Projets — liste compacte, projets professionnels d'abord */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Projets</h2>
          <ul className={styles.projList}>
            <li><strong>IA générative locale — Flextrack (Airbus, fin 2025–présent)</strong> : solutions IA (Ollama, llama.cpp, vLLM) sur Jetson Orin/Thor pour la maintenance industrielle ; synthèse des états 1 min → ~10 s ; Linux autonome sans Internet.</li>
            <li><strong>Robotique — MSDR / MS1R (Airbus, fin 2025)</strong> : POC fonctionnel de communication Profinet ↔ TCP/IP (IPC Siemens, Linux) ; développement C++ du robot.</li>
            <li><strong>Traduction temps réel vers le G-code — Afflelou (2024)</strong> : application Python/Tkinter multi-OS (Linux/Windows) ; maintenance curative de machines de découpe de verre.</li>
            <li><strong>IA locales (Docker)</strong> : déploiement de LLM (Mistral, LLaMA) et de diffusion d'images (Stable Diffusion, Flux), API et debug en Python.</li>
            <li><strong>Imprimante 3D à argile sableuse — ESILV (3ᵉ année)</strong> : refonte du câblage, isolation des composants, mise à jour du firmware, configuration des moteurs.</li>
            <li><strong>Optimisation d'une imprimante 3D FDM</strong> : remplacement de la carte mère, pilotage à distance via Raspberry Pi/SSH sous Linux, amélioration de la tête et du plateau.</li>
            <li><strong>PCB ESP32 (KiCad)</strong> : conception, soudure SMD et étude de l'anodisation du cuivre pour réduire les coûts des circuits interactifs.</li>
            <li><strong>PC dédié IA</strong> : sélection et montage de hardware optimisé (rapport performance/prix), accès distant via NoMachine.</li>
          </ul>
        </section>

        <hr className={styles.divider} />

        {/* Parcours Professionnel — enrichi, trié par importance */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Parcours Professionnel</h2>

          <div className={styles.experience}>
            <strong className={styles.expTitle}>Consultant IA &amp; Intégration de Solution — ALTEN / Airbus</strong>
            <p className={styles.expMeta}>Toulouse, France | Fin 2025 – Présent</p>
            <p className={styles.expMission}>Conception, déploiement et maintenance de solutions d'IA pour la maintenance industrielle.</p>
            <ul>
              <li><strong>Architecture IA :</strong> Idéation, définition des besoins opérationnels et architecture technique, de la conception jusqu'au déploiement sur site.</li>
              <li><strong>IA locale &amp; Edge AI :</strong> Évaluation et intégration de solutions open source — Ollama, llama.cpp, vLLM — sur plateformes NVIDIA Jetson Orin &amp; Thor.</li>
              <li><strong>Données industrielles :</strong> Chaînes de collecte et de traitement temps réel (OPC UA, TCP/IP, logs machines, InfluxDB).</li>
              <li><strong>RAG &amp; GraphRAG :</strong> Récupération de connaissances combinant documentation, données industrielles et graphes pour enrichir les réponses.</li>
              <li><strong>NLP / assistance opérateur :</strong> Transformation des listes d'états et infos opérationnelles en synthèses exploitables.</li>
              <li><strong>Confidentialité :</strong> Environnements Linux autonomes, données traitées/exploitables localement, sans accès Internet (contraintes industrielles).</li>
              <li><strong>Déploiement &amp; maintenance :</strong> Installation, conteneurisation, maintenance (Docker, OpenWebUI, Memgraph) avec évolution continue.</li>
              <li><strong>Optimisation :</strong> Temps de génération des synthèses réduit d'environ 1 min à une dizaine de secondes.</li>
              <li><strong>Validation :</strong> Essais en site de production Airbus, notamment sur le Flextrack.</li>
            </ul>
            <p className={styles.expSub}><strong>Robotique industrielle &amp; Systèmes (4 mois)</strong> — Communication Profinet ↔ TCP/IP via IPC Siemens (Linux Debian) ; développement C++ (débogage, refactoring, ajout de fonctions) ; robot MSDR (projet MS1R, Airbus) ; POC fonctionnel validant l'intégration.</p>
            <p className={styles.expTech}>Technologies : Linux, Docker, OpenWebUI, Ollama, llama.cpp, vLLM, Jetson Orin/Thor, SSH, Memgraph, C++, Profinet, TCP/IP, OPC UA, InfluxDB, RAG, GraphRAG.</p>
          </div>

          <div className={styles.experience}>
            <strong className={styles.expTitle}>Stage Ingénieur IA — ALTEN (Direction de l'Innovation)</strong>
            <p className={styles.expMeta}>Toulouse, France | 2025 (6 mois)</p>
            <ul>
              <li><strong>Maintenance prescriptive :</strong> Système multi-IA pour anticiper les pannes industrielles.</li>
              <li><strong>Data Engineering :</strong> Création bout-en-bout d'un dataset industriel propriétaire et traitement de signaux complexes.</li>
              <li><strong>Deep Learning :</strong> Entraînement, expérimentation et évaluation de plus de 700 modèles (CNN, RNN).</li>
              <li><strong>Optimisation Edge :</strong> Adaptation et compression des modèles pour le matériel embarqué.</li>
              <li><strong>Gestion de projet :</strong> Encadrement technique d'une petite équipe et suivi Agile (Azure DevOps).</li>
            </ul>
            <p className={styles.expTech}>Technologies : Python, TensorFlow, CNN, RNN, traitement du signal, Azure DevOps.</p>
          </div>

          <div className={styles.experience}>
            <strong className={styles.expTitle}>Stage Développement Python &amp; Maintenance — Afflelou</strong>
            <p className={styles.expMeta}>Nevers, France | 2024 (4 mois)</p>
            <ul>
              <li><strong>Développement :</strong> Application Python (Tkinter) de traduction temps réel vers le G-code.</li>
              <li><strong>Déploiement multi-OS :</strong> Portage et intégration sur Linux et Windows.</li>
              <li><strong>Souveraineté logicielle :</strong> Réduction de la dépendance de l'usine vis-à-vis des logiciels propriétaires tiers.</li>
              <li><strong>Rénovation industrielle :</strong> Maintenance curative de machines de découpe de verre et upgrades (surface de découpe, module laser).</li>
            </ul>
            <p className={styles.expTech}>Technologies : Python, Tkinter, G-code, systèmes industriels.</p>
          </div>

          <div className={styles.experience}>
            <strong className={styles.expTitle}>Restauration — Lafayette Café &amp; Hôtel Lutetia</strong>
            <p className={styles.expMeta}>Toulouse, France | 2023 (3 mois)</p>
            <ul>
              <li>Cuisine et service, gestion des stocks, amélioration des process internes.</li>
            </ul>
          </div>

          <div className={styles.experience}>
            <strong className={styles.expTitle}>Stagiaire — IFTH (Industrie Française du Textile et de l'Habillement)</strong>
            <p className={styles.expMeta}>Toulouse, France | 2022 (1 mois)</p>
            <ul>
              <li>Expérimentation de l'impression 3D sur textile.</li>
              <li>Rédaction d'une documentation pour la prise en main d'une imprimante 3D (Ultimaker 2) à destination des débutants.</li>
            </ul>
          </div>

          <div className={styles.experience}>
            <strong className={styles.expTitle}>Intervenant — Pôle Léonard de Vinci, formation "Initiation aux FabLabs"</strong>
            <p className={styles.expMeta}>2020 – 2023</p>
            <ul>
              <li>Enseignement de la méthodologie de réalisation de projets FabLab à des étudiants en école de commerce.</li>
              <li>Formation à l'utilisation des outils de fabrication (imprimantes 3D, dremel, etc.).</li>
              <li>Évaluation des projets réalisés et accompagnement dans leur développement.</li>
            </ul>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* Vie Associative */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Vie Associative</h2>
          <p><strong className={styles.miniTitle}>Responsable événementiel (2023-2024)</strong> au De Vinci Fablab</p>
          <p><strong className={styles.miniTitle}>Responsable Projet (2021–2022)</strong> De Vinci Fablab organisation et suivi des projets<br/>
          Élu membre méritant du FabLab grâce à mon implication active.</p>
          <p><strong className={styles.miniTitle}>Membre de l'association sportive AMMA </strong> (Association de Mixed Martial Arts)</p>
        </section>
      </div>
    </div>
    </div>
  );
}
