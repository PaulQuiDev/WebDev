// components/Navbar.js
"use client"; // Directive pour indiquer que c'est un Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link 
          href="/" 
          className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
        >
          Curriculum vitæ
        </Link>
        <Link 
          href="/PortFolio" 
          className={`${styles.link} ${pathname === '/PortFolio' ? styles.active : ''}`}
        >
          PortFolio
        </Link>
        <a 
          href="/PAUL-RAGUET-CV.pdf" 
          download 
          className={styles.downloadButton}
        >
          Télécharger CV PDF
        </a>
      </div>
    </nav>
  );
}
