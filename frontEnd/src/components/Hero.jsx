import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate=useNavigate()
  return (
    <div
  className="w-full min-h-screen px-4 sm:px-20 xl:px-32 relative flex flex-col justify-center items-center bg-cover bg-center"
  style={{ backgroundImage: `url(${assets.gradientBackground})` }}
>
       <div className='text-center'>
        <h1 className='text-3xl sm:5xl m:7xl font-semibold m-2'>Create amazing content <br/>with <span className='text-primary font-bold'>Ai tools</span> </h1>
        <p className='text-gray-600'>Transfrom your content creation with our suit of premium AI tools. Write articles, generate images and enhance your workflow</p>
       </div>
       <div className='flex mt-10 justify-center gap-4'>
        <button onClick={()=>{
            navigate('/ai')

        }} className='bg-primary px-10 py-3 rounded-full cursor-pointer hover:scale-102 active:scale-95 text-white'>Start creating now</button>
        <button className='bg-white px-10 py-3 rounded-full cursor-pointer hover:scale-102 active:scale-95 text-black'>Watch demo</button>
       </div>

       <div className='flex items-center gap-4 mt-8 '>
          <img  className='h-8' src={assets.user_group} />
          <p>Trusted by 10k+ people</p>
       </div>
    </div>
  )
}

export default Hero