import { motion } from 'framer-motion'
import IconWrapper from './IconWrapper'
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss } from 'react-icons/si'
import React from 'react';

interface FloatingElementsProps {
  mousePosition: { x: number; y: number }
}

export default function FloatingElements({ mousePosition }: FloatingElementsProps) {
  const icons = [SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-48 h-48 opacity-40 flex items-center justify-center"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 80}%`,
          }}
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
            rotate: Math.random() * 360,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        >
          <IconWrapper size="xl">
            {React.createElement(icons[i % icons.length])}
          </IconWrapper>
        </motion.div>
      ))}
    </div>
  )
}