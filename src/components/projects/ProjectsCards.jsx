import React from 'react'

const ProjectsCards = (props) => {
  return (
    <>
          <div className='w-1/2 group transition-all relative rounded-none hover:rounded-[50px] overflow-hidden h-full '>
          <img className='h-full w-full object-cover' src={props.image1} alt="" />
          <div className=' opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 flex justify-center items-center h-full w-full bg-black/20'>
            <h2 className='uppercase text-5xl font-[font2] border-3 rounded-full pt-2 px-5 border-white text-white'>View The Project</h2>
          </div>
          </div>

           <div className='w-1/2 group transition-all relative rounded-none hover:rounded-[50px] overflow-hidden h-full '>
          <img className='h-full w-full object-cover' src={props.image2} alt="" />
          <div className=' opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 flex justify-center items-center h-full w-full bg-black/20'>
            <h2 className='uppercase text-5xl font-[font2] border-3 rounded-full pt-2 px-5 border-white text-white'>View The Project</h2>
          </div>
          </div>
  </>
          
        
  )
}

export default ProjectsCards