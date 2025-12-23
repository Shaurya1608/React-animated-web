import React from 'react'
import ProjectsCards from '../components/projects/ProjectsCards'
import ProjectFooter from '../components/projects/ProjectFooter'

const Project = () => {

  const pro = [{
    image1:'/ProjectImages/bes.jpg',
    image2:'/ProjectImages/bike.jpg',
  },{
    image1:'/ProjectImages/bullet.jpg',
    image2:'/ProjectImages/cap.jpg',
    },{
    image1:'/ProjectImages/ciris.jpg',
    image2:'/ProjectImages/coup.jpg',
    },{
    image1:'/ProjectImages/fruite.jpg',
    image2:'/ProjectImages/pjc.jpg',
    }]

  return (
    <div className='p-3'>
      <div className=' pt-[44vh]'>
        <h2 className='font-[font2] text-[11vw] uppercase'>Projects</h2>
      </div>
      <div className='-mt-15'>
        {pro.map((elem)=>{
          return <ProjectsCards image1={elem.image1} image2={elem.image2} />
        })}
      </div>
      <div>
        <ProjectFooter />
      </div>
    </div>
  )
}

export default Project