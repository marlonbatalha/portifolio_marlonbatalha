'use client';

import { motion } from 'framer-motion';
import { SlideReveal } from '../ui/SlideReveal';

// Importando ícones oficiais
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiVercel,
  SiDotnet
} from 'react-icons/si';
import { TbBrandAzure, TbAutomation } from 'react-icons/tb';

interface Technology {
  name: string;
  category: string;
  Icon: any;
  description: string;
  color: string;
}

const technologies: Technology[] = [
  {
    name: 'React',
    category: 'Frontend',
    Icon: SiReact,
    description: 'Experiência sólida no desenvolvimento de interfaces componentizadas, integração com APIs e boas práticas de performance.',
    color: '#61DAFB'
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    Icon: SiNextdotjs,
    description: 'Desenvolvimento de aplicações React com SSR, SSG e otimizações de performance e SEO.',
    color: '#FFFFFF'
  },
  {
    name: 'TypeScript',
    category: 'Linguagem',
    Icon: SiTypescript,
    description: 'Uso consistente de tipagem estática para organização, segurança e manutenção do código.',
    color: '#3178C6'
  },
  {
    name: 'JavaScript',
    category: 'Linguagem',
    Icon: SiJavascript,
    description: 'Domínio intermediário com foco em assincronismo, manipulação de dados e integração com APIs.',
    color: '#F7DF1E'
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    Icon: SiHtml5,
    description: 'Estruturação semântica, acessível e bem organizada para aplicações web modernas.',
    color: '#E34F26'
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    Icon: SiCss3,
    description: 'Criação de layouts responsivos utilizando flexbox, grid e boas práticas de estilização.',
    color: '#1572B6'
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    Icon: SiTailwindcss,
    description: 'Estilização eficiente de interfaces modernas com classes utilitárias.',
    color: '#06B6D4'
  },
  {
    name: 'Node.js',
    category: 'Backend',
    Icon: SiNodedotjs,
    description: 'Criação de APIs e serviços back-end estruturados, com integração a bancos de dados e sistemas externos.',
    color: '#339933'
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    Icon: SiPostgresql,
    description: 'Modelagem de dados, consultas eficientes e integração com aplicações back-end.',
    color: '#4169E1'
  },
  {
    name: 'Prisma ORM',
    category: 'Backend',
    Icon: SiPrisma,
    description: 'Utilização de ORM para schemas, migrações e consultas tipadas.',
    color: '#FFFFFF'
  },
  {
    name: 'Supabase',
    category: 'Backend',
    Icon: SiSupabase,
    description: 'Uso de Backend as a Service com autenticação, banco PostgreSQL e integrações com aplicações web.',
    color: '#3ECF8E'
  },
  {
    name: 'Vercel',
    category: 'DevOps',
    Icon: SiVercel,
    description: 'Deploy e gerenciamento de aplicações com integração contínua e preview automático.',
    color: '#FFFFFF'
  },
  {
    name: 'Azure',
    category: 'DevOps',
    Icon: TbBrandAzure,
    description: 'Hospedagem e gerenciamento de aplicações e bancos de dados em ambiente de nuvem.',
    color: '#0078D4'
  },
  {
    name: 'ASP.NET',
    category: 'Backend',
    Icon: SiDotnet,
    description: 'Desenvolvimento e manutenção de APIs e aplicações baseadas em ASP.NET.',
    color: '#512BD4'
  },
  {
    name: 'N8N',
    category: 'Automação',
    Icon: TbAutomation,
    description: 'Criação de workflows avançados para automação de processos, integrações complexas e regras de negócio.',
    color: '#FF6D5A'
  }
];

export default function Skills() {
  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="skills" className="section bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-secondary)]">
      <div className="container">
        <div>
          <motion.div 
            className="text-center mb-[var(--spacing-3xl)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-[var(--spacing-sm)]">Conhecimentos e Tecnologias</h2>
            <p className="text-lg text-[var(--color-text-tertiary)] max-w-[600px] mx-auto">
              Linguagens, Frameworks, Ferramentas, Libraries e mais
            </p>
          </motion.div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[var(--spacing-xl)] mt-[var(--spacing-2xl)] max-lg:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] max-lg:gap-[var(--spacing-lg)] max-md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] max-[480px]:grid-cols-1">
            {technologies.map((tech, index) => {
              const IconComponent = tech.Icon;
              
              return (
                <div key={tech.name} className="relative h-full min-h-[180px] max-md:min-h-[160px]">
                  <SlideReveal delay={index * 0.05} className="h-full">
                  <motion.div
                    className="relative h-full glass-card p-[var(--spacing-xl)] flex flex-col gap-[var(--spacing-md)] max-md:p-[var(--spacing-lg)] transition-all duration-300"
                    initial="initial"
                    whileHover="hover"
                    variants={{
                      initial: { y: 0 },
                      hover: { 
                        y: -8,
                        boxShadow: `0 0 0 1px ${tech.color}30, 0 8px 24px ${tech.color}20, 0 0 40px ${tech.color}15`,
                        transition: {
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1] as const,
                        }
                      }
                    }}
                    style={{
                      background: `linear-gradient(135deg, ${tech.color}08 0%, ${tech.color}03 100%)`,
                      boxShadow: `0 0 0 1px ${tech.color}15, 0 4px 12px ${tech.color}10`,
                    }}
                  >
                    <motion.div 
                      className="relative w-16 h-16 flex items-center justify-center border rounded-[var(--radius-lg)] transition-all duration-[400ms] z-10 overflow-hidden max-md:w-14 max-md:h-14"
                      variants={iconVariants}
                      style={{
                        background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}10)`,
                        borderColor: `${tech.color}30`,
                        boxShadow: `0 4px 12px ${tech.color}20`,
                      }}
                      whileHover={{
                        borderColor: `${tech.color}50`,
                        boxShadow: `0 8px 20px ${tech.color}30`,
                      }}
                    >
                      <IconComponent 
                        className="w-8 h-8 transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] max-md:w-7 max-md:h-7"
                        style={{ color: tech.color }}
                      />
                    </motion.div>
                    
                    <div className="relative z-10 flex-1 flex flex-col gap-[var(--spacing-xs)]">
                      <h3 className="text-lg font-semibold text-[var(--color-text-primary)] m-0 leading-[1.3] max-md:text-base">{tech.name}</h3>
                      <span 
                        className="text-xs font-medium uppercase tracking-[0.05em] opacity-80"
                        style={{ color: tech.color }}
                      >
                        {tech.category}
                      </span>
                      <p className="text-sm text-[var(--color-text-tertiary)] leading-[1.5] m-0 mt-[var(--spacing-xs)] max-md:text-[0.8125rem]">{tech.description}</p>
                    </div>
                  </motion.div>
                  </SlideReveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
