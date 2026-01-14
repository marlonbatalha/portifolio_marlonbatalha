'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.label} variants={itemVariants}>
            <span className={styles.dot}></span>
            Disponível para novos projetos
          </motion.div>

          <motion.h1 className={styles.title} variants={itemVariants}>
            Marlon Batalha
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            Desenvolvedor Full Stack
          </motion.p>

          <motion.p className={styles.description} variants={itemVariants}>
            Especializado em criar experiências digitais modernas e escaláveis.
            Transformo ideias em produtos que fazem a diferença.
          </motion.p>

          <motion.div className={styles.cta} variants={itemVariants}>
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              Ver Projetos
            </button>
            <button
              className="btn btn-outline"
              onClick={() => scrollToSection('contact')}
            >
              Entre em Contato
            </button>
          </motion.div>

          <motion.div className={styles.stats} variants={itemVariants}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>3+</div>
              <div className={styles.statLabel}>Anos de Experiência</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>Projetos Concluídos</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Satisfação</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className={styles.scrollIcon}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Background Grid */}
      <div className={styles.grid}></div>
    </section>
  );
}
