import React from 'react'
import Tilt from "react-parallax-tilt"
import { motion } from 'framer-motion'
import FloatingElements from './FloatingElements'
import { useMousePosition } from '../hooks/useMousePosition'
import Image from 'next/image'
import { Rectangle } from './svg'

const HomePageCard = () => {
  const mousePosition = useMousePosition()

  return (
    <main className='flex justify-center items-center h-screen w-full bg-gradient-to-br from-zinc-950 to-neutral-950 overflow-hidden'>
      <FloatingElements mousePosition={mousePosition} />
      <Tilt
        tiltMaxAngleX={4}
        tiltMaxAngleY={4}
        perspective={1000}
        transitionSpeed={1000}
        scale={1.03}
        gyroscope={true}
        className="w-full max-w-[1250px] h-[590px] p-1"
      >
        <motion.div 
          className='w-full h-full rounded-[32px]  bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-xl'
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="rounded-2xl h-full w-full mt-1">
            <Image src={Rectangle} alt="rect" width={1290} height={590} className='object-cover' />
          </div>
        </motion.div>
      </Tilt>
    </main>
  )
}

export default HomePageCard
