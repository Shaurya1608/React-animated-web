import React from 'react'
import ProjectsCards from '../components/projects/ProjectsCards'
import ProjectFooter from '../components/projects/ProjectFooter'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

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


    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
      gsap.from('.hero',{
        height:'100px',
        stagger:{
          amount:0.1
        },
        scrollTrigger:{
          trigger:'.lol',
          markers:true,
          start:'top 90%',
          end:'top -200%',
          scrub:true
        }
      })
    })


  return (
    <div className='p-3'>
      <div className=' pt-[44vh]'>
        <h2 className='font-[font2] text-[11vw] uppercase'>Projects</h2>
      </div>
      <div className='lol -mt-15'>
        {pro.map((elem , idx)=>{
          return  <div key={idx}  className='hero w-full h-120 flex gap-3 mb-3'>
           <ProjectsCards image1={elem.image1} image2={elem.image2} /> </div>
        })}
      </div>
    </div>
  )
}

export default Project