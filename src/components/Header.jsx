
import React, { useState } from 'react'
import NavBar from './NavBar'
import { AnimatePresence, motion } from 'motion/react'




const Header = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false)
    const [hoveredTab, sethoveredTab] = useState(null)
    const [shop, setshop] = useState(false)
    console.log(motion)
    const tabs = [
      'Falcon 9',
      'Falcon Heavy',
      'Dragon',
      'Starship',
      'Human Spaceflight',
      'Rideshare',
      'Starshield',
      'Starlink',
    ];
    function renderTabs(){
    return(  tabs.map((tab,idx)=>{

     

        return( 
          
        <motion.li key={idx} className='relative' 
          onMouseEnter={()=>sethoveredTab(idx)}
          onMouseLeave={()=>{sethoveredTab(null)}}
        
        >{tab}
          <AnimatePresence>
             {hoveredTab === idx && (
             
              <motion.div className='absolute -bottom-2 bg-white w-full h-0.5'
               initial={{
                scaleX:0,
                transformOrigin:'left'
               }}
               animate={{
                scaleX:1
                
               }}
               exit={{
                 transformOrigin:'right',
                  scaleX:0
               }}
              
               ></motion.div>
              
               )}
               </AnimatePresence>
        </motion.li>
        
        ) 
        
      })
    )
    }
    
  return (
      <div className=' h-[100px] flex justify-between items-center fixed w-full z-50 bg-transparent px-20 pr-9'>
           <div className='h-full'><img className='logo h-full scale-130 relative top-[-5px] w-[210px]' src='/Spacex-l.svg'></img></div>
           <div className='text-white text-sm'>
                <ul className='tabs flex items-center justify-between w-[800px]'>
                   
                      {renderTabs()}
                </ul>
           </div>
         
           <div className='shop text-white text-sm relative' onMouseEnter={()=>{setshop(true)}} onMouseLeave={()=>setshop(false)}>
           <AnimatePresence>
             {shop && (
             
              <motion.div className='absolute -bottom-2 bg-white w-full h-0.5'
               initial={{
                scaleX:0,
                transformOrigin:'left'
               }}
               animate={{
                scaleX:1
                
               }}
               exit={{
                 transformOrigin:'right',
                  scaleX:0
               }}
              
               ></motion.div>
              
               )}
               </AnimatePresence>
            <p>SHOP</p></div>
           <div className='text-white flex justify-center items-center h-full' onClick={()=>{
            setisMenuOpen(!isMenuOpen)
           }}>
           <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 menu z-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
         
          
    </div>
    <NavBar isOpen={isMenuOpen}/>
    </div>
      
   

    
  )
}

export default Header