import React from 'react'

export const Card = ({image,name,price}) => {

  return (
    <>
    <div className='bg-amber-950 w-64'>
        <img src={image} alt="" />

        <div className='flex flex-col justify-center items-center '>
        <h3 className='text-gray-100 my-5' >{name}</h3>
        <p className='text-gray-100 my-2' >{price}</p>
        <button className='bg-blue-400 rounded-full w-36 text-white my-2'>Comprar</button>
        </div>
    
    </div>
    
    </>
  )
}