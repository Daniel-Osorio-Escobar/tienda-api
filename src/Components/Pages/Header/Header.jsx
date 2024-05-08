import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
export const Header = () => {
  return (
    <>
    <header className='w-full h-32 bg-stone-800 flex items-center' > 
    <div className='text-6xl text-gray-50'> Tienda</div>
    
    
    <FaCartArrowDown className='text-gray-50 text-4xl'/>
    </header>
    </>
  )
}
