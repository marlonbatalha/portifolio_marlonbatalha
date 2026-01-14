'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'CSS / Tailwind', level: 92 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 78 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  {
    title: 'Ferramentas',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Vercel / AWS', level: 85 },
      { name: 'Figma', level: 80 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="skills" className={`${styles.skills} section`} ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 className={styles.title}>Habilidades & Expertise</h2>
            <p className={styles.subtitle}>
              Tecnologias e ferramentas que domino
            </p>
          </motion.div>

          <div className={styles.grid}>
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className={styles.category}
                variants={itemVariants}
              >
                <h3 className={styles.categoryTitle}>{category.title}</h3>

                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className={styles.skill}>
                      <div className={styles.skillHeader}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillLevel}>{skill.level}%</span>
                      </div>
                      <div className={styles.skillBar}>
                        <motion.div
                          className={styles.skillProgress}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.15 + skillIndex * 0.1,
                            ease: [0.22, 1, 0.36, 1] as const,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
