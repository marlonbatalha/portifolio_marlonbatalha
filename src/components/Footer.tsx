'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-primary)] py-[var(--spacing-3xl)] pb-[var(--spacing-xl)]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-[var(--spacing-3xl)] mb-[var(--spacing-3xl)]">
          <div>
            <motion.h3
              className="gradient-text text-[1.75rem] mb-2"
              whileHover={{ scale: 1.05 }}
            >
              Marlon Batalha
            </motion.h3>
            <p className="text-[var(--color-text-tertiary)] text-[0.9375rem] mb-1">Desenvolvedor Full Stack</p>
            <p className="text-sm text-[var(--color-text-muted)] italic">
              Criando experiências digitais excepcionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-xl)]">
            <div>
              <h4 className="text-base font-semibold mb-[var(--spacing-lg)] text-[var(--color-text-primary)]">Navegação</h4>
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-[var(--color-text-tertiary)] mb-2 transition-all duration-300 text-[0.9375rem] bg-none border-none p-0 cursor-pointer text-left hover:text-[var(--color-accent-primary)] hover:translate-x-1"
                style={{ fontFamily: "var(--font-primary)" }}
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-[var(--color-text-tertiary)] mb-2 transition-all duration-300 text-[0.9375rem] bg-none border-none p-0 cursor-pointer text-left hover:text-[var(--color-accent-primary)] hover:translate-x-1"
                style={{ fontFamily: "var(--font-primary)" }}
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block text-[var(--color-text-tertiary)] mb-2 transition-all duration-300 text-[0.9375rem] bg-none border-none p-0 cursor-pointer text-left hover:text-[var(--color-accent-primary)] hover:translate-x-1"
                style={{ fontFamily: "var(--font-primary)" }}
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block text-[var(--color-text-tertiary)] mb-2 transition-all duration-300 text-[0.9375rem] bg-none border-none p-0 cursor-pointer text-left hover:text-[var(--color-accent-primary)] hover:translate-x-1"
                style={{ fontFamily: "var(--font-primary)" }}
              >
                Habilidades
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-[var(--color-text-tertiary)] mb-2 transition-all duration-300 text-[0.9375rem] bg-none border-none p-0 cursor-pointer text-left hover:text-[var(--color-accent-primary)] hover:translate-x-1"
                style={{ fontFamily: "var(--font-primary)" }}
              >
                Contato
              </button>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-[var(--spacing-lg)] text-[var(--color-text-primary)]">Redes Sociais</h4>
              <a 
                href="#"
                className="block text-[var(--color-text-tertiary)] mb-2 transition-all duration-300 text-[0.9375rem] hover:text-[var(--color-accent-primary)] hover:translate-x-1"
              >
                LinkedIn
              </a>
              <a 
                href="#"
                className="block text-[var(--color-text-tertiary)] mb-2 transition-all duration-300 text-[0.9375rem] hover:text-[var(--color-accent-primary)] hover:translate-x-1"
              >
                GitHub
              </a>
              <a 
                href="#"
                className="block text-[var(--color-text-tertiary)] mb-2 transition-all duration-300 text-[0.9375rem] hover:text-[var(--color-accent-primary)] hover:translate-x-1"
              >
                Twitter
              </a>
              <a 
                href="#"
                className="block text-[var(--color-text-tertiary)] mb-2 transition-all duration-300 text-[0.9375rem] hover:text-[var(--color-accent-primary)] hover:translate-x-1"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="pt-[var(--spacing-xl)] border-t border-[var(--color-border-secondary)] flex justify-between items-center flex-wrap gap-[var(--spacing-lg)] max-md:flex-col max-md:text-center">
          <p className="text-[var(--color-text-muted)] text-sm m-0">&copy; {currentYear} Marlon Batalha. Todos os direitos reservados.</p>
          <p className="text-[var(--color-text-muted)] text-sm m-0">Desenvolvido com Next.js & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
