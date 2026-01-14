import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function SlideReveal({ children, delay = 0, className = "" }: SlideRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}