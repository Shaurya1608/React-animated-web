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
          start:'top 90%',
          end:'top -200%',
          scrub:true
        }
      })
    })


  return (
    <div className='lg:p-3 p-2'>
      <div className=' pt-[44vh]'>
        <h2 className='font-[font2] lg:text-[11vw] text-6xl uppercase'>Projects</h2>
      </div>
      <div className='lol -lg:mt-15'>
        {pro.map((elem , idx)=>{
          return  <div key={idx}  className='hero w-full lg:h-120 flex lg:flex-row flex-col lg:gap-3 mb-3 gap-2'>
           <ProjectsCards image1={elem.image1} image2={elem.image2} /> </div>
        })}
      </div>
    </div>
  )
}

export default Project