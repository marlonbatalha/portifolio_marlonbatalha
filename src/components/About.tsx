'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Professional, subtle animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const features = [
    {
      number: '01',
      title: 'Desenvolvimento',
      description: 'Criação de aplicações web modernas com foco em performance e experiência do usuário',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 18L22 12L16 6M8 6L2 12L8 18"/>
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Arquitetura',
      description: 'Design de sistemas escaláveis e manuteníveis com as melhores práticas do mercado',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Inovação',
      description: 'Sempre buscando novas tecnologias e abordagens para resolver problemas complexos',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="section bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-secondary)] relative overflow-hidden" ref={ref}>
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bg-primary)] to-transparent opacity-50" />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={fadeInUpVariants}>
            <h2 className="mb-4">Sobre Mim</h2>
            <p className="text-lg text-[var(--color-text-tertiary)] max-w-[600px] mx-auto">
              Desenvolvedor apaixonado por criar soluções elegantes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <motion.div 
              className="flex flex-col gap-6"
              variants={fadeInUpVariants}
            >
              {[
                'Sou um desenvolvedor full stack com foco em criar experiências digitais excepcionais. Minha abordagem combina design limpo com código eficiente para entregar produtos que não apenas funcionam, mas encantam.',
                'Com experiência em tecnologias modernas como React, Next.js, TypeScript e Node.js, trabalho para transformar ideias complexas em interfaces intuitivas e sistemas robustos.',
                'Acredito em código limpo, arquitetura escalável e na importância de sempre aprender e evoluir. Cada projeto é uma oportunidade de criar algo excepcional.'
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-base leading-relaxed text-[var(--color-text-secondary)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    delay: 0.3 + index * 0.1, 
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  {text}
                </motion.p>
              ))}

              {/* Stats */}
              <motion.div
                className="flex gap-8 mt-8 pt-8 border-t border-[var(--color-border-secondary)] flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                {[
                  { number: '3+', label: 'Anos de Experiência' },
                  { number: '20+', label: 'Projetos Concluídos' },
                  { number: '100%', label: 'Satisfação' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex-1 min-w-[120px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ 
                      delay: 0.8 + index * 0.1,
                      duration: 0.4
                    }}
                  >
                    <div className="text-3xl font-bold text-[var(--color-accent-primary)] font-[var(--font-display)] leading-none mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs text-[var(--color-text-tertiary)] font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Feature Cards */}
            <motion.div 
              className="flex flex-col gap-4"
              variants={fadeInUpVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.number}
                  className="glass-card group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    delay: 0.4 + index * 0.15, 
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-[var(--color-accent-primary)] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border-primary)] flex items-center justify-center text-[var(--color-accent-primary)] flex-shrink-0 group-hover:border-[var(--color-accent-primary)] group-hover:bg-[var(--color-accent-primary)]/5 transition-all duration-300">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-4xl font-bold text-[var(--color-text-muted)] leading-none mb-2 opacity-30 font-[var(--font-display)]">
                          {feature.number}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg mb-2 text-[var(--color-text-primary)] font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed m-0">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
