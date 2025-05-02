import { AnimatePresence, motion } from 'motion/react'
import React, { useState } from 'react'


const Content = ({title1,title2,button,section}) => {
    const [btnhovered, setbtnhovered] = useState(false)
    
  return (
    <motion.div className={`${section} bg-cover bg-center h-[735px] relative`}>
    <div className="absolute h-50 w-100 bottom-23 left-22 text-white flex flex-col gap-1 items-start">
      <motion.h3 
      initial={{
        y:30,
        opacity:0
      }}
      whileInView={{
        y:0,
        opacity:1
      }}
      transition={{
        duration:0.3,
        ease:'easeOut'
      }}
    
      className="t1 text-2xl">{title1}</motion.h3>
      <motion.h1 
        initial={{
          y:50,
          opacity:0
        }}
        whileInView={{
          y:0,
          opacity:1
        }}
        transition={{
          duration:0.5,
          ease:'easeOut'
        }}
      className="t2 text-5xl ml-0.5">{title2}</motion.h1>

      <motion.button
         initial={{
          y:50,
          opacity:0
        }}
        whileInView={{
          y:0,
          opacity:1
        }}
        transition={{
          duration:0.7,
          ease:'easeOut'
        }}
       className={`btn1 border-2 border-white px-15 py-3 mt-7 cursor-pointer relative font-bold overflow-hidden bg-transparent ${btnhovered ? 'text-black' : 'text-white'}`}
        onMouseEnter={() => setbtnhovered(true)}
        onMouseLeave={() => setbtnhovered(false)}
      >
        {/* Animated Background */}
        <AnimatePresence>
          {btnhovered && (
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-white"
              initial={{
                scaleY: 0,
                transformOrigin: 'bottom',
              }}
              animate={{
                scaleY: 1,
              }}
              transition={{
                duration: 0.2,
                ease:'easeOut'
              }}
              exit={{
                transformOrigin: 'top',
                scaleY: 0,
              }}
            ></motion.div>
          )}
        </AnimatePresence>

        {/* Text */}
        <span className="relative z-50">{button}</span>
      </motion.button>
    </div>
  </motion.div>
  )
}

export default Content