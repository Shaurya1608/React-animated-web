import React from 'react'
import { Link } from 'react-router-dom'


const HomeBottonText = () => {
  return (
    <div className='font-[font2] flex justify-center items-center gap-2 '>
      <p className='absolute lg:w-80 w-60 lg:base lg:text-[1vw] text-xs right-0 lg:bottom-40 bottom-37 font-[font1] pr-2 leading-tight'>
      &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K72 is an agency that carefully considers every action to nurture the brand. Tomorrow, in 5 months, and in 5 years. We seek out the friction that creates the spark to generate emotion. To ensure an honest relationship, we are unfiltered; we say what needs to be said, we do what needs to be done.
      </p>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center lg:px-10 px-7 border-white rounded-full uppercase'>
       <Link className='text-[6vw] lg:mt-6 ' to={'/project'}>Projects</Link>
      </div>
      <div className='lg:border-3 border-2  hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center lg:px-10 px-7 border-white rounded-full uppercase'>
       <Link className='text-[6vw] lg:mt-6 ' to={'/Agence'}>Agence</Link>
      </div>
    </div> 
  )
}

export default HomeBottonText