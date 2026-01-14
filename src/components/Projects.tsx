'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

// Mapa de cores para cada tecnologia
const techColors: { [key: string]: string } = {
  'Next.js': '#FFFFFF',
  'TypeScript': '#3178C6',
  'PostgreSQL': '#4169E1',
  'Vercel': '#000000',
  'React': '#61DAFB',
  'Node.js': '#339933',
  'MongoDB': '#47A248',
  'Stripe': '#635BFF',
  'D3.js': '#F9A03C',
  'Firebase': '#FFCA28',
  'Vue.js': '#42B883',
  'Express': '#000000',
  'MySQL': '#4479A1',
};

// Mapa de cores para categorias
const categoryColors: { [key: string]: string } = {
  'Web App': '#3b82f6',      // Azul
  'E-commerce': '#10b981',   // Verde
  'Dashboard': '#8b5cf6',    // Roxo
  'Productivity': '#f59e0b', // Laranja
};

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
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="projects" className="section bg-[var(--color-bg-primary)] border-t border-[var(--color-border-secondary)] relative overflow-hidden" ref={ref}>
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bg-secondary)] to-transparent opacity-50" />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="mb-4">Projetos Selecionados</h2>
            <p className="text-lg text-[var(--color-text-tertiary)] max-w-[600px] mx-auto">
              Alguns dos trabalhos que desenvolvi recentemente
            </p>
          </motion.div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 max-md:grid-cols-1">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="glass-card p-8 flex flex-col group"
                variants={itemVariants}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex justify-between items-center mb-6">
                  <span 
                    className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md"
                    style={{
                      color: categoryColors[project.category] || 'var(--color-accent-primary)',
                      background: `${categoryColors[project.category] || '#3b82f6'}10`,
                      border: `1px solid ${categoryColors[project.category] || '#3b82f6'}30`,
                    }}
                  >
                    {project.category}
                  </span>
                  <div className="text-2xl font-bold text-[var(--color-text-muted)] opacity-20 font-[var(--font-display)]">
                    0{project.id}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-[var(--color-text-primary)]">
                  {project.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-[var(--color-text-tertiary)] mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => {
                    const color = techColors[tech] || '#9ca3af';
                    return (
                      <span 
                        key={tech} 
                        className="px-3 py-1 rounded-md text-xs font-medium transition-all duration-300 hover:scale-105"
                        style={{
                          color: color,
                          background: `${color}10`,
                          border: `1px solid ${color}30`,
                        }}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-[var(--color-border-secondary)]">
                  <button className="inline-flex items-center gap-2 text-[var(--color-accent-primary)] text-sm font-semibold hover:gap-3 transition-all duration-300">
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
