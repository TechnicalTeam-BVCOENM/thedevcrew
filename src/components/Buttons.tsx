import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
}

export default function Button({ children, variant = 'primary' }: ButtonProps) {
  const baseStyle = "px-6 py-3 rounded-xl font-bold"
  const variantStyle = variant === 'primary' 
    ? "bg-gradient-to-br from-zinc-100 to-neutral-600 text-black" 
    : "border border-white"

  return (
    <motion.button 
      className={`${baseStyle} ${variantStyle}`}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {children}
    </motion.button>
  )
}