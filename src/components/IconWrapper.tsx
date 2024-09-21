import { ReactNode } from 'react'

interface IconWrapperProps {
  children: ReactNode
  size?: 'normal' | 'large' | 'xl'
}

export default function IconWrapper({ children, size = 'normal' }: IconWrapperProps) {
  const sizeClass = size === 'xl' ? 'w-48 h-48' : 'w-full h-full'
  
  return (
    <div className={`${sizeClass} text-blue-400`}>
      {children}
    </div>
  )
}