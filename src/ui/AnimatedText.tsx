import { motion } from 'framer-motion'

type AnimatedTextProps = {
  text: string
  className?: string
}

export default function AnimatedText({
  text,
  className = ''
}: AnimatedTextProps) {
  return (
    <span className={`inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          whileHover={{
            color: '#4169E1',
            y: -2
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 20
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}