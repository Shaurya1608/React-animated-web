import React from 'react'
import Video from '../components/home/video.jsx'
import HomeHeroText from '../components/home/homeHeroText.jsx'
import HomeBottomText from '../components/home/homeBottomText.jsx'


const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
      <Video/>
    </div>

    <div className=' h-screen w-screen relative pb-4 overflow-hidden flex flex-col justify-between'>
          <HomeHeroText/>
          <HomeBottomText/>
    </div>

    </div>
  
  )
}

export default Home