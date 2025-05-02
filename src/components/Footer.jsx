import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center items-center py-8 gap-10 text-[12px] bg-black'>
        <h3 className='f1 text-white '>SPACEX &copy; {new Date().getFullYear()}</h3>
        <h3 className='f2 text-white hover:'>PRIVACY POLICY</h3>
        <h3 className='f3 text-white'>SUPPLIERS</h3>
    </div>
  )
}

export default Footer