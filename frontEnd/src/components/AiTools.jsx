import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';

const AiTools = () => {
    const {user}=useUser();
    const navigate=useNavigate();
     const { openSignIn } = useClerk();

  return (
    <div className='px-4 sm:px-20 xl:px-32  '>
        <div className='text-center mb-40' >
            <h2 className='text-slate-700 font-bold text-2xl'>Powerful AI Tools</h2>
            <p className='text-gray-500'>Everything you need to  create, enhance and optimize with cutting edge AI technology</p>

        </div>
        <div className='flex flex-wrap mt-10 justify-center'>
            {
                AiToolsData.map((tool,idx)=>(
                    <div key={idx} className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border order-gray-100 hover:scale-110 duration-300 cursor-pointer' onClick={()=>{
                        user ?navigate(tool.path):openSignIn()

                    }}>
                       <tool.Icon className='w-12 h-12 p-3  rounded-xl'  style={{background:`linear-gradient(to bottom ,${tool.bg.from},${tool.bg.to})`}}/>

                       <h3 className='mt-6 mb-3 text-lg font-semibold'>{tool.title}</h3>
                       <p className='text-gray-500'>{tool.description}</p>
                    </div>

                ))

            }
           

        </div>

    </div>
  )
}

export default AiTools