'use client';

import { motion } from 'framer-motion';
import { useTypewriterLoop } from '../ui/TextAnimation';

export default function Hero() {
  const typedText = useTypewriterLoop(
    [
      "Especializado em criar experiências digitais modernas e escaláveis. Transformo ideias em produtos que fazem a diferença.",
      "Desenvolvedor focado em soluções digitais modernas, escaláveis e orientadas a resultados.",
      "Desenvolvedor Full Stack com foco em aplicações modernas, performáticas e escaláveis.",
      "Desenvolvimento de aplicações web escaláveis com foco em experiência do usuário.",
      "Transformo ideias em experiências digitais eficientes, modernas e escaláveis."
    ],
    50,   // velocidade de escrita
    10,   // velocidade de apagar
    3000  // duração de pausa
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
    },
  };

  const blobVariants = {
    animate: (i: number) => ({
      y: [0, -30, 0],
      x: [0, i % 2 === 0 ? 30 : -30, 0],
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 8 + i * 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    }),
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Ajuste para o header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const title = "Marlon Batalha";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Base Background - Dark Blue Gray */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#050810] to-[#000000]" />
      
      {/* Animated Gradient Mesh (Moved to Framer Motion) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          custom={1}
          variants={blobVariants}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          custom={2}
          variants={blobVariants}
          animate="animate"
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          custom={3}
          variants={blobVariants}
          animate="animate"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" 
        />
      </div>

      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.2) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 80%)',
        }}
      />

      <div className="container relative z-10 px-4">
        <motion.div
          className="max-w-[900px] mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--color-bg-tertiary)]/50 backdrop-blur-sm border border-[var(--color-border-primary)]/50 rounded-full text-sm font-medium text-[var(--color-accent-primary)] mb-8 shadow-lg shadow-blue-900/10 hover:border-[var(--color-accent-primary)] transition-colors duration-300"
            variants={itemVariants}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponível para novos projetos
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight text-[var(--color-text-primary)] perspective-1000"
            style={{ fontFamily: 'var(--font-display)' }}
            variants={containerVariants}
          >
            <span className="inline-block">
              {title.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block origin-bottom"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl font-medium text-[var(--color-text-secondary)] mb-8 tracking-wide"
            style={{ fontFamily: 'var(--font-display)' }}
            variants={itemVariants}
          >
            Desenvolvedor Full Stack
          </motion.p>

          <motion.div 
            className="text-base md:text-lg leading-relaxed text-[var(--color-text-tertiary)] mb-12 max-w-[650px] mx-auto min-h-[4rem] flex flex-col items-center justify-start"
            variants={itemVariants}
          >
            <p>
              {typedText}
              <span className="inline-block w-0.5 h-5 bg-[var(--color-accent-primary)] ml-1 animate-pulse align-middle" />
            </p>
          </motion.div>

          <motion.div 
            className="flex gap-4 justify-center flex-wrap mb-20"
            variants={itemVariants}
          >
            <motion.button
              className="px-8 py-3.5 bg-[var(--color-accent-primary)] text-white rounded-lg font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-shadow"
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Projetos
            </motion.button>
            <motion.button
              className="px-4 py-3.5 bg-transparent border border-[var(--color-border-primary)] text-[var(--color-text-primary)] rounded-lg font-medium hover:bg-[var(--color-bg-tertiary)] hover:border-[var(--color-accent-primary)] transition-colors"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Entre em Contato
            </motion.button>
          </motion.div>

          {/* Stats - More Detailed */}
          <motion.div
            className="flex gap-8 md:gap-16 justify-center flex-wrap"
            variants={itemVariants}
          >
            {[
              { number: '1,5+', label: 'Anos de Experiência' },
              { number: '10+', label: 'Projetos Entregues' },
              { number: '100%', label: 'Satisfação dos Clientes' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label} 
                className="text-center group cursor-default"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent-primary)] to-blue-400 font-[var(--font-display)] mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-[var(--color-text-tertiary)] uppercase tracking-wider group-hover:text-[var(--color-text-secondary)] transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Indicador de scroll - Moved inside flow */}
          <motion.div
            className="mt-20 flex justify-center cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            onClick={() => scrollToSection('about')}
          >
            <motion.div
              className="w-[30px] h-[50px] border-2 border-[var(--color-border-primary)] rounded-full p-1 flex justify-center hover:border-[var(--color-accent-primary)] transition-colors duration-300"
            >
              <motion.div 
                className="w-1.5 h-2.5 bg-[var(--color-accent-primary)] rounded-full"
                animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
