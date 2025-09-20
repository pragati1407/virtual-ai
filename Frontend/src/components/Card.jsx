import React from 'react'

function Card({ image }) {
  return (
    <div className='w-[200px] h-[300px] bg-[#030326] border-2 border-[blue] rounded-2xl overflow-hidden'>
      <img src={image} alt="character" className='w-full h-full object-cover' />
    </div>
  )
}

export default Card
