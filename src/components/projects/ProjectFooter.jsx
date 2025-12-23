import React from 'react'
import { Link } from 'react-router-dom'

const ProjectFooter = () => {
  return (
     <div>
        <div className='h-115 w-full bg-black'>
        <div className='h-25 w-full flex justify-between'>
          <div className='flex gap-2 pt-3 pl-4 text-white border-white'>
            <Link to="/Agence" className='font-[font2] text-7xl border-3 rounded-full pt-3 px-9  hover:border-[#D3FD50] hover:text-[#D3FD50]'>FB </Link>
            <Link to="/Agence" className='font-[font2] text-7xl border-3 rounded-full pt-3 px-9  hover:border-[#D3FD50] hover:text-[#D3FD50]'>IG</Link>
            <Link to="/Agence" className='font-[font2] text-7xl border-3 rounded-full pt-3 px-9  hover:border-[#D3FD50] hover:text-[#D3FD50]'>TW</Link>
            <Link to="/Agence" className='font-[font2] text-7xl border-3 rounded-full pt-3 px-9  hover:border-[#D3FD50] hover:text-[#D3FD50]'>YT</Link>
          </div>
          <div className='p-2  text-white border-white'>
            <h2 className='font-[font2] text-7xl border-3 rounded-full pt-3 px-10 uppercase  hover:border-[#D3FD50] hover:text-[#D3FD50] '>Contact</h2>
          </div>
        </div>
        </div>
      </div>
  )
}

export default ProjectFooter