import React from 'react'
import Video from './Video'


const HomeHeroText = () => {
  return (
    <div  className='font-[font1] lg:mt-0 mt-60 pt-5 text-center'>
      <div className='lg:text-[9vw] text-[10vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center' >The spark</div >
      <div className='lg:text-[9vw] text-[10vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-start justify-center' >that
        <div className='h-[8vw] w-[15vw] lg:-mt-3 mt-2rounded-full overflow-hidden '>
        <Video />
        </div>
        generate
        </div > 
      <div className='lg:text-[9vw] text-[10vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center' >creativity</div >
    </div >
  )
}

export default HomeHeroText