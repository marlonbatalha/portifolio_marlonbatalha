'use client';

import { motion } from 'framer-motion';
import { useTypewriterLoop } from '../ui/TextoAnimacao';

export default function Hero() {
  const typedText = useTypewriterLoop(
    [
      "Especializado em criar experiências digitais modernas e escaláveis. Transformo ideias em produtos que fazem a diferença.",
      "Desenvolvedor focado em soluções digitais modernas, escaláveis e orientadas a resultados.",
      "Desenvolvedor Full Stack com foco em aplicações modernas, performáticas e escaláveis.",
      "Desenvolvimento de aplicações web escaláveis com foco em experiência do usuário.",
      "Transformo ideias em experiências digitais eficientes, modernas e escaláveis."
    ],
    40,   // typing speed
    25,   // deleting speed
    2500  // pause duration
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
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
        ease: [0.25, 0.1, 0.25, 1],
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Base Background - Dark Blue Gray */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#050810] to-[#000000]" />
      
      {/* Animated Gradient Mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>

      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
        }}
      />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.2) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 80%)',
        }}
      />

      <div className="container relative z-10">
        <motion.div
          className="max-w-[800px] mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-tertiary)] border border-[var(--color-border-primary)] rounded-full text-sm font-medium text-[var(--color-accent-primary)] mb-8"
            variants={itemVariants}
          >
            <span className="w-2 h-2 bg-[var(--color-accent-primary)] rounded-full" />
            Disponível para novos projetos
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 leading-tight tracking-tight text-[var(--color-text-primary)]"
            style={{ fontFamily: 'var(--font-display)' }}
            variants={itemVariants}
          >
            Marlon Batalha
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl font-medium text-[var(--color-text-secondary)] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
            variants={itemVariants}
          >
            Desenvolvedor Full Stack
          </motion.p>

          <motion.p 
            className="text-base leading-relaxed text-[var(--color-text-tertiary)] mb-10 max-w-[600px] mx-auto min-h-[3.5rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {typedText}
            <span className="inline-block w-0.5 h-5 bg-[var(--color-accent-primary)] ml-1 animate-pulse" />
          </motion.p>

          <motion.div 
            className="flex gap-4 justify-center flex-wrap mb-16"
            variants={itemVariants}
          >
            <motion.button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Projetos
            </motion.button>
            <motion.button
              className="btn btn-outline"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Entre em Contato
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-12 justify-center flex-wrap"
            variants={itemVariants}
          >
            {[
              { number: '3+', label: 'Anos' },
              { number: '20+', label: 'Projetos' },
              { number: '100%', label: 'Satisfação' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-[var(--color-accent-primary)] font-[var(--font-display)] mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[var(--color-border-primary)] rounded-full relative cursor-pointer hover:border-[var(--color-accent-primary)] transition-colors duration-300"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => scrollToSection('about')}
        >
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-[var(--color-accent-primary)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
