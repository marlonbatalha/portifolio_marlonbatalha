'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <motion.h3
              className="gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Marlon Batalha
            </motion.h3>
            <p>Desenvolvedor Full Stack</p>
            <p className={styles.tagline}>
              Criando experiências digitais excepcionais
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Navegação</h4>
              <button onClick={() => scrollToSection('home')}>Início</button>
              <button onClick={() => scrollToSection('about')}>Sobre</button>
              <button onClick={() => scrollToSection('projects')}>Projetos</button>
              <button onClick={() => scrollToSection('skills')}>Habilidades</button>
              <button onClick={() => scrollToSection('contact')}>Contato</button>
            </div>

            <div className={styles.linkGroup}>
              <h4>Redes Sociais</h4>
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Marlon Batalha. Todos os direitos reservados.</p>
          <p>Desenvolvido com Next.js & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
