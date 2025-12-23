import React from 'react'
import ProjectsCards from '../components/projects/ProjectsCards'

const Project = () => {
  return (
    <div className='p-3'>
      <div className=' pt-[44vh]'>
        <h2 className='font-[font2] text-[11vw] uppercase'>Projects</h2>
      </div>
      <div className='-mt-15'>
        <ProjectsCards/>
      </div>
    </div>
  )
}

export default Project