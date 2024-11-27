"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./ProjectBubble.module.css";

export default function ProjectBubble({ title, summary, details, skills, links, images, videos }) {
  const [validMedia, setValidMedia] = useState([]);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    const validateMedia = async () => {
      const media = [...(images || []), ...(videos || [])];
      const validated = [];

      for (const item of media) {
        try {
          const response = await fetch(item, { method: "HEAD" }); // Check if the resource exists
          if (response.ok) {
            validated.push(item); // Add valid media
          }
        } catch (error) {
          console.warn(`Media not found or invalid: ${item}`);
        }
      }
      setValidMedia(validated);
    };

    validateMedia();
  }, [images, videos]);

  useEffect(() => {
    if (validMedia.length > 0) {
      const getRandomInterval = () => Math.random() * 3000 + 2000; // Random interval between 3 and 6 seconds

      const timeout = setTimeout(() => {
        setCurrentMediaIndex((prevIndex) =>
          prevIndex === validMedia.length - 1 ? 0 : prevIndex + 1
        );
      }, getRandomInterval());

      return () => clearTimeout(timeout);
    }
  }, [validMedia, currentMediaIndex]);

  if (validMedia.length === 0) {
    return (
      <div className={styles.projectBubble}>
        <div className={styles.mediaContainer}>
          <p className={styles.errorMessage}>Média non-disponible recharger la page SVP.</p>
        </div>
        <div className={styles.content}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p>{summary}</p>
          <details className={styles.details}>
            <summary className={styles.detailsSummary}>Voir plus</summary>
            <p>{details}</p>
          </details>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.projectBubble}>
      <div className={styles.mediaContainer}>
        {validMedia[currentMediaIndex].includes(".mp4") ? (
          <video
            src={validMedia[currentMediaIndex]}
            autoPlay
            loop
            muted
            className={styles.projectMedia}
          />
        ) : (
          <Image
            src={validMedia[currentMediaIndex]}
            alt={`Media ${currentMediaIndex + 1} for ${title}`}
            width={500}
            height={300}
            className={styles.projectMedia}
          />
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p>{summary}</p>
        <details className={styles.details}>
          <summary className={styles.detailsSummary}>Voir plus</summary>
          <div className={styles.detailsContent}>
            <p>{details}</p>
            <br></br>
            <h4>Compétences développées :</h4>
            <ul className={styles.skillsList}>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <h4>Ressources supplémentaires :</h4>
            <ul className={styles.linksList}>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
}
