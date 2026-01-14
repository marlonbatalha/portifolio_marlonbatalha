'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="about" className={`${styles.about} section`} ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 className={styles.title}>Sobre Mim</h2>
            <p className={styles.subtitle}>
              Desenvolvedor apaixonado por criar soluções elegantes
            </p>
          </motion.div>

          <div className={styles.grid}>
            <motion.div className={styles.text} variants={itemVariants}>
              <p>
                Sou um desenvolvedor full stack com foco em criar experiências digitais 
                excepcionais. Minha abordagem combina design limpo com código eficiente 
                para entregar produtos que não apenas funcionam, mas encantam.
              </p>
              <p>
                Com experiência em tecnologias modernas como React, Next.js, TypeScript 
                e Node.js, trabalho para transformar ideias complexas em interfaces 
                intuitivas e sistemas robustos.
              </p>
              <p>
                Acredito em código limpo, arquitetura escalável e na importância de 
                sempre aprender e evoluir. Cada projeto é uma oportunidade de criar 
                algo excepcional.
              </p>
            </motion.div>

            <motion.div className={styles.cards} variants={itemVariants}>
              <div className="glass-card">
                <div className={styles.cardNumber}>01</div>
                <h3>Desenvolvimento</h3>
                <p>
                  Criação de aplicações web modernas com foco em performance 
                  e experiência do usuário
                </p>
              </div>

              <div className="glass-card">
                <div className={styles.cardNumber}>02</div>
                <h3>Arquitetura</h3>
                <p>
                  Design de sistemas escaláveis e manuteníveis com as melhores 
                  práticas do mercado
                </p>
              </div>

              <div className="glass-card">
                <div className={styles.cardNumber}>03</div>
                <h3>Inovação</h3>
                <p>
                  Sempre buscando novas tecnologias e abordagens para resolver 
                  problemas complexos
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
