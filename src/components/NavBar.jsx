import { AnimatePresence, motion } from 'motion/react'
import React from 'react'


const NavBar = ({isOpen}) => {
    console.log(isOpen)
  return (
    <>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
        initial={{
            opacity:0,
            width:0
        }}
        animate={{
            opacity:1,
            width:300
        }}
        exit={{
            opacity:0,
            width:0
        }}
        transition={{
            duration:0.2,
            ease:'linear'
        }}
        
        
        className='bg-black h-screen top-0 w-[300px] fixed right-0 shadow-black shadow-2xl px-10 py-20'>
          <ul className='nav-text text-white flex flex-col gap-5 mt-5'>
            
            <motion.li
             initial={{
                opacity:0,
                y:10
            }}
            animate={{
                opacity:1,
                y:0
            }}
            transition={{
                duration:0.2,
                ease:'linear',
                delay:0.5
            }}
            exit={{
                opacity: 0,
                y: 10,
                transition:{
                    y:{
                        duration:0.2
                    }
                }
              }}
            >MISSION</motion.li>
            <motion.li
             initial={{
                opacity:0,
                y:10
            }}
            animate={{
                opacity:1,
                y:0
            }}
            transition={{
                duration:0.3,
                ease:'linear',
                delay:0.5
            }}
            exit={{
                opacity: 0,
                y: 10,
                transition:{
                     y:{
                        duration:0.2
                    }
                }
              }}
            >LAUNCHES</motion.li>
            <motion.li
             initial={{
                opacity:0,
                y:10
            }}
            animate={{
                opacity:1,
                y:0
            }}
            transition={{
                duration:0.4,
                ease:'linear',
                delay:0.5
            }}
            exit={{
                opacity: 0,
                y: 10,
                transition:{
                    y:{
                        duration:0.2
                    }
                }
              }}
            >CAREERS</motion.li>
            <motion.li
             initial={{
                opacity:0,
                y:10
            }}
            animate={{
                opacity:1,
                y:0
            }}
            transition={{
                duration:0.5,
                ease:'linear',
                delay:0.5
            }}
            exit={{
                opacity: 0,
                y: 10,
                transition:{
                    y:{
                        duration:0.2
                    }
                }
              }}
            >UPDATES</motion.li>
            <motion.li
             initial={{
                opacity:0,
                y:10
            }}
            animate={{
                opacity:1,
                y:0
            }}
            exit={{
                opacity: 0,
                y: 10,
                transition:{
                    y:{
                        duration:0.2
                    }
                }
              }}
            transition={{
                duration:0.6,
                ease:'linear',
                delay:0.5
            }}
          
            >SHOP</motion.li>

           
           
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}

export default NavBar