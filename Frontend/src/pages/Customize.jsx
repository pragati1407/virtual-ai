import React from 'react'
import Card from '../components/card'
import image1 from "../assets/harry.png"
import image2 from "../assets/hermoini.png"
import image3 from "../assets/roun.png"
import image4 from "../assets/ginni.png"
import image5 from "../assets/voldemort.png"
import image6 from "../assets/draco.png"
import image7 from "../assets/dumbaldore.png"

function Customize() {
  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-black to-[#030353] flex justify-center'>
      <div className='w-[90%] max-w-[60%] flex justify-center items-center flex-wrap gap-4'>
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image3} />
        <Card image={image4} />
        <Card image={image5} />
        <Card image={image6} />
        <Card image={image7} />
      </div>
    </div>
  )
}

export default Customize
