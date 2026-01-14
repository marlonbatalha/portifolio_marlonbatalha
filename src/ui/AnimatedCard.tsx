import { motion } from "framer-motion";

export function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
      className="card"
    >
      <h3>Título do Card</h3>
      <p>
        Este card entra com uma animação de slide suave,
        igual ao efeito do vídeo.
      </p>
    </motion.div>
  );
}