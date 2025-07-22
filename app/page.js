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
            <li>Impression 3D (FDM SLA)</li>
            <li>Maitrise de l’anglais</li>
            <li>Pack Office</li>
            <li>Programmation: C,C#,Python</li>
            <li>Permis de conduire B</li>
            <li>Permis bateau (côtier)</li>
            <li>Linux</li>
          </ul>
        </div>
        <div className={styles.mainContent}>
        {/* Section d'introduction */}
        <section className={styles.section}>
          <h1 className={styles.title}>Paul Raguet </h1>
          <p className={styles.subTitle}>
            Bientôt diplômé de&nbsp;
            <a href="https://www.esilv.fr/" target="_blank" rel="noopener noreferrer">
              l’ESILV
            </a>
            , promotion 2025, je recherche dès octobre un poste
            d’ingénieur orienté développement et intégration de solutions technologiques. Mes
            domaines de prédilection sont l’intelligence artificielle, la robotique et l’électronique.
          </p>
        </section>

        {/* Formation */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Formation</h2>
          <p><strong className={styles.miniTitle} >2020–2025 – Pôle Léonard de Vinci, Ecole d’ingénieur ESILV</strong>, en majeure créative technologie</p>
          <p><strong className={styles.miniTitle} >2022 – 6 mois – Échange Erasmus RTU</strong> (Riga Technologic Université) Lettonie</p>
        </section>

        <hr className={styles.divider} />

        {/* Projets */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Projets</h2>
          <div className={styles.project}>
            <h3 className={styles.miniTitle}>Projet de troisième année à l’ESILV :</h3>
            <p>
              Conception d'une imprimante 3D à argile sableuse (3 m3), avec câblage refait, isolation des composants et mise à jour du firmware. 
              Configuration des moteurs.
            </p>
            <i>Compétences : travail d'équipe, configuration de moteurs, gestion de projets.</i>
          </div>

          <div className={styles.project}>
            <h3 className={styles.miniTitle}><br/>Optimisation d'une imprimante 3D FDM</h3>
            <p>
              Remplacement de la carte mère, intégration d'une Raspberry Pi pour un pilotage à distance via SSH sous Linux. 
              Amélioration de la tête d'impression et du plateau.
            </p>
            <i>Compétences : Linux, SSH, optimisation matérielle.</i>
          </div>

          <div className={styles.project}>
            <h3 className={styles.miniTitle} ><br/>Conception de circuits</h3>
            <p>
              Création d'un PCB pour ESP32 avec KiCad, soudure SMD et anodisation du cuivre. 
              Étude sur l'anodisation pour réduire les coûts des circuits interactifs.
            </p>
            <i>Compétences : KiCad, soudure SMD, anodisation, recherche.</i>
          </div>

          <div className={styles.project}>
            <h3 className={styles.miniTitle}><br/>Utilisation locale de modèles IA</h3>
            <p>
              Déploiement de modèles LLM (Mistral, LLaMA) et diffusion d'images (Stable Diffusion, Flux) via Docker. 
              Programmation en Python, modification des API et debug.
            </p>
            <i>Compétences : Docker, Python, API, debug et optimisation.</i>
          </div>

          <div className={styles.project}>
            <h3 className={styles.miniTitle}><br/>Construction d’un PC pour l’IA</h3>
            <p>
              Recherche et sélection des meilleurs composants pour le rapport performance/prix, puis montage d’un PC dédié à l’IA. Accès à distance via NoMachine.
            </p>
            <i>Compétences : hardware, optimisation, accès distant, veille technologique.</i>
          </div>
        </section>

        <hr className={styles.divider} />

                  {/* Parcours Professionnel */}
          <section className={styles.section}>
            <h2 className={styles.heading}>Parcours Professionnel</h2>
            <p>
              <strong className={styles.miniTitle}>2025 – Stage de fin d’études de 6 mois chez Alten (Direction Innovation)</strong><br />
              - Développement d’un système multi-IA pour la maintenance prescriptive sur une mini-usine 4.0.<br />
              - Conception des architectures IA (TensorFlow), traitement des données, entraînement et tests.<br />
              - Démonstration fonctionnelle du système pour valider sa pertinence.<br />
              - Encadrement d’une petite équipe : répartition des tâches et suivi technique.
            </p>
            <p>
              <strong className={styles.miniTitle}><br/>2024 - Stage de 4 mois à la DSI (Direction des Systèmes d'Information) chez Afflelou</strong><br />
              - Développement d'une application en Python pour rendre une machine CNC compatible avec le gcode.<br />
              - Diagnostic et réparation d'une machine de découpe, incluant l'identification des pièces défectueuses et leur remplacement.
            </p>
            <p>
              <strong className={styles.miniTitle}><br/>2023 – 3 mois - Travail dans la restauration, Lafayette Café et Hôtel Lutetia</strong>
            </p>
            <p>
              <strong className={styles.miniTitle}><br/>2022 – 1 mois - Stagiaire à l’IFTH (Industrie Française du Textile et de l’Habillement)</strong><br />
              - Expérimentation de l’impression 3D sur textile.<br />
              - Rédaction d'une documentation pour la prise en main de l'imprimante 3D Ultimaker2 à destination des débutants.
            </p>
            <p>
              <strong className={styles.miniTitle}><br/>2020–2023 - Intervenant au Pôle Léonard de Vinci pour la formation "Initiation aux FabLabs"</strong><br />
              - Enseignement de la méthodologie de réalisation de projets FabLab à des étudiants en école de commerce.<br />
              - Formation sur l'utilisation des outils de fabrication (imprimantes 3D, dremel, etc.).<br />
              - Évaluation des projets réalisés par les étudiants et accompagnement dans leur développement.
            </p>
          </section>


        <hr className={styles.divider} />

        {/* Vie Associative */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Vie Associative</h2>
          <p><strong className={styles.miniTitle}>Responsable événementiel (2023-2024)</strong> au De Vinci Fablab</p>
          <p><strong className={styles.miniTitle}>Responsable Projet (2021–2022)</strong> De Vinci Fablab organisation et suivi des projets<br/>
          Élu membre méritant du FabLab grâce à mon implication active.</p>
          <p><strong className={styles.miniTitle}>Membre de l’association sportive AMMA </strong> (Association de Mixed Martial Arts)</p>
        </section>
      </div>
    </div>
    </div>
  );
}
