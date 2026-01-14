'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'Sistema de Comunicados',
    description: 'Plataforma completa para gestão de comunicados corporativos com dashboard administrativo e controle de leitura.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Vercel'],
    category: 'Web App',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Loja virtual moderna com carrinho de compras, integração de pagamento e painel administrativo completo.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'E-commerce',
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para visualização de dados com gráficos em tempo real e relatórios personalizados.',
    tech: ['React', 'D3.js', 'Firebase'],
    category: 'Dashboard',
  },
  {
    id: 4,
    title: 'Task Management',
    description: 'Aplicação para gerenciamento de projetos e tarefas com colaboração em equipe e notificações em tempo real.',
    tech: ['Vue.js', 'Express', 'MySQL'],
    category: 'Productivity',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="projects" className={`${styles.projects} section`} ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 className={styles.title}>Projetos Selecionados</h2>
            <p className={styles.subtitle}>
              Alguns dos trabalhos que desenvolvi recentemente
            </p>
          </motion.div>

          <div className={styles.grid}>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={styles.card}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.category}>{project.category}</span>
                  <div className={styles.number}>0{project.id}</div>
                </div>

                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>

                <div className={styles.tech}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <button className={styles.btnLink}>
                    Ver Projeto
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
