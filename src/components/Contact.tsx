'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'marlonbatalha.dev@outlook.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M3 4L10 11L17 4M3 4H17M3 4V16H17V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Telefone',
      value: '+55 (21) 99611-7660',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Localização',
      value: 'Rio de janeiro, Brasil',
      icon: (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M10 10C11.1046 10 12 9.10457 12 8C12 6.89543 11.1046 6 10 6C8.89543 6 8 6.89543 8 8C8 9.10457 8.89543 10 10 10Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M10 2C6.68629 2 4 4.68629 4 8C4 12 10 18 10 18C10 18 16 12 16 8C16 4.68629 13.3137 2 10 2Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="section bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-secondary)] relative overflow-hidden" ref={ref}>
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bg-primary)] to-transparent opacity-50" />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="mb-4">Vamos atuar juntos rumo ao futuro</h2>
            <p className="text-lg text-[var(--color-text-tertiary)] max-w-[600px] mx-auto">
              Gostou da minha apresentação, entre em contato comigo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 max-md:gap-8">
            <motion.div className="flex flex-col gap-4" variants={itemVariants}>
              {contactInfo.map((item) => (
                <div 
                  key={item.label} 
                  className="flex items-start gap-4 p-6 glass-card"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-bg-tertiary)] border border-[var(--color-border-primary)] rounded-lg text-[var(--color-accent-primary)] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-tertiary)] mb-1 uppercase tracking-wider font-medium">{item.label}</div>
                    <div className="text-sm font-medium text-[var(--color-text-primary)]">{item.value}</div>
                  </div>
                </div>
              ))}

              <div className="p-6 glass-card">
                <div className="text-xs text-[var(--color-text-tertiary)] mb-4 uppercase tracking-wider font-medium">Redes Sociais</div>
                <div className="flex gap-4">
                  {[
                    { 
                      name: 'LinkedIn', 
                      path: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z',
                      hoverColor: 'hover:text-[#0098b5] hover:border-[#0077b5]',
                      size: 40,
                      position: {x: -1, y: 0},
                      url: 'https://www.linkedin.com/in/marlon-batalha-3323a724b/'
                    },
                    { 
                      name: 'GitHub', 
                      path: 'M10 0c-5.523 0-10 4.477-10 10 0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z',
                      hoverColor: 'hover:text-[#8b5cf6] hover:border-[#8b5cf6]',
                      size: 60,
                      position: {x: 4, y: 5},
                      url: 'https://github.com/marlonbatalha'
                    },
                    { 
                      name: 'Twitter', 
                      path: 'M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84',
                      hoverColor: 'hover:text-[#1da1f2] hover:border-[#1da1f2]',
                      size: 60,
                      position: {x: 5, y: 5},
                      url: '#'
                    },
                  ].map((social) => (
                    <a 
                      key={social.name}
                      href={social.url}
                      className={`w-16 h-16 flex items-center justify-center bg-[var(--color-bg-tertiary)] border border-[var(--color-border-primary)] rounded-lg text-[var(--color-text-secondary)] transition-all duration-300 ${social.hoverColor}`}
                      aria-label={social.name}
                    >
                      <svg 
                        width={social.size} 
                        height={social.size} 
                        viewBox="-4 2 30 20" 
                        fill="currentColor"
                        style={{ transform: `translate(${social.position?.x || 0}px, ${social.position?.y || 0}px)` }}
                      >
                        <path d={social.path}/>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.form 
              className="glass-card p-8" 
              onSubmit={handleSubmit} 
              variants={itemVariants}
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 bg-[var(--color-bg-tertiary)] border border-[var(--color-border-primary)] rounded-lg text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] text-sm transition-all duration-300 focus:outline-none focus:border-[var(--color-accent-primary)]"
                  style={{ fontFamily: "var(--font-primary)" }}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 bg-[var(--color-bg-tertiary)] border border-[var(--color-border-primary)] rounded-lg text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] text-sm transition-all duration-300 focus:outline-none focus:border-[var(--color-accent-primary)]"
                  style={{ fontFamily: "var(--font-primary)" }}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Conte-me sobre seu projeto..."
                  className="w-full px-4 py-3 bg-[var(--color-bg-tertiary)] border border-[var(--color-border-primary)] rounded-lg text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] text-sm transition-all duration-300 resize-y min-h-[140px] focus:outline-none focus:border-[var(--color-accent-primary)]"
                  style={{ fontFamily: "var(--font-primary)" }}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary w-full"
              >
                Enviar Mensagem
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
