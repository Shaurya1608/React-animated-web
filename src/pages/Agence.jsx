import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
   "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
  "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
  "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
  "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
  "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
  "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
  "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
  "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
  "https://k72.ca/images/teamMembers/blank.jpg?w=640&h=960&s=252a0cd13e881c6a268fe3c75f8abbca",
  "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
  "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
  "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
  "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
  ]

  useGSAP(function(){
    gsap.to(imageDivRef.current, {
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:"top 29%",
        end:'bottom -60%',
        pin:true,
        onUpdate:(elem)=>{
          let imageIndex 
          if(elem.progress<1){
          imageIndex= Math.floor(elem.progress * imageArray.length);
          }else{
            imageIndex=imageArray.length -1
          }
          imageRef.current.src=imageArray[imageIndex]
          
        }
      }
    })
  })

  return (
   <div>
    <div className='section1'>
    <div ref={imageDivRef} className='absolute overflow-hidden h-[20vw] w-[15vw]   top-60 left-[30vw] rounded-4xl'>
        <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2" alt="" />
    </div>
     <div className=' relative font-[font1]'>
      <div className=' mt-[55vh]'>
        <h1 className='text-[21vw] text-center uppercase leading-[17vw]'>Seventy <br />
        Two</h1>
      </div>
      <div className='pl-[40%] mt-20'>
        <p className='text-5xl'> &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
          Our curiosity fuels our creativity. We stay humble and leave big egos at the door. 
         We believe a brand is alive — shaped by its values, personality, and story. 
         When those are ignored, short-term success may follow, but long-term impact is lost. 
        That’s why we focus on perspective and purpose, building brands that truly influence and endure.</p>
      </div>
    </div>
   </div>

   <div className='section2 h-screen'>

   </div>
   </div>
   
  )
}

export default Agence