import React from 'react'
import Video from './video'


const HomeHeroText = () => {
  return (
    <div  className='font-[font1] pt-5 text-center'>
      <div className='text-[9vw] uppercase leading-[8vw] flex items-center justify-center' >The spark</div >
      <div className='text-[9vw] uppercase leading-[8vw] flex items-start justify-center' >that
        <div className='h-[8vw] w-[15vw] -mt-3 rounded-full overflow-hidden '>
        <Video />
        </div>
        generate
        </div > 
      <div className='text-[9vw] uppercase leading-[8vw] flex items-center justify-center' >creativity</div >
    </div >
  )
}

export default HomeHeroText