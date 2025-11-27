import { Edit, Hash, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '@clerk/clerk-react';
import toast from 'react-hot-toast';
import Markdown from 'react-markdown';

axios.defaults.baseURL=import.meta.env.VITE_BASE_URL;
const BlogTitles = () => {

  const blogCategories = [
    'General',
    'Technology',
    'Business',
    'Health',
    'Lifestyle',
    'Education',
    'Travel',
    'Food',
  ]

  const [selectedIdx, setSelectedIdx] = useState(blogCategories[0])
  const [input, setInput] = useState("")
  const [loading,setLoading]=useState(false);
  const [content,setContent]=useState("");

  const {getToken}=useAuth();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setLoading(true);
      const prompt=`generate a blog title for keyword ${input} in the category ${selectedIdx}`
      const {data}= await axios.post('/api/ai/generate-blog-title',{
        prompt
      },{
        headers:{Authorization:`Bearer ${await getToken()}`}
      })

      if(data.success){
        setContent(data.content);
      }else{
        toast(data.message)
      }
      
    } catch (error) {
      toast(error.message)
    }
    setInput("")
    setLoading(false);
  }

  return (
    <div>
      <div className='p-6 flex h-full'>
        {/* left col */}
        <form
          onSubmit={handleSubmit}
          className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-300 m-2 h-110 overflow-y-scroll'
        >
          <div className='flex items-center gap-3'>
            <Sparkles className='text-[#8E37EB]' />
            <h2 className='text-xl font-semibold'>Title Generator</h2>
          </div>

          <p className='mt-6 text-sm font-medium'>Keyword</p>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            className='w-full p-2 px-3 mt-2 outline-none border border-gray-200 rounded-md text-sm'
            placeholder='Type your topic ...'
          />

          <p className='mt-4 text-sm font-medium'>Blog Category</p>
          <div className='mt-3 flex gap-3 flex-wrap'>
            {blogCategories.map((item, idx) => (
              <span
                key={idx}
                onClick={() => setSelectedIdx(item)}
                className={`text-sm px-4 py-1 border rounded-full cursor-pointer
                  ${selectedIdx === item ? "bg-purple-400 text-white" : "bg-white text-gray-500"}
                `}
              >
                {item}
              </span>
            ))}
          </div>

          <br />
          
          <button className='w-full flex justify-center gap-2 border border-gray-500 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white py-2'>
            {
              loading ?(<span className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"></span>):(
                <><Edit className='w-4' />
                Generate Title
                </>
                

              )
            }
            
          </button>
        </form>

        {/* right col */}
        <div className='w-full p-4 max-w-lg bg-white rounded-lg flex flex-col border border-gray-200 m-2 h-200'>
          <div className='flex items-center gap-3'>
            <Hash className='w-5 h-5 text-primary' />
            <h1 className='text-xl font-semibold'>Generated Titles</h1>
          </div>
          {!content?(
            <div className='h-full w-full flex justify-center items-center'>
            <div className='flex flex-col items-center'>
              <Hash className='w-5 h-5' />
              <p className='text-sm text-gray-500'>
                Enter topic and click "Generate Title" to get started
              </p>
            </div>
          </div>
          ):(
            <div className='mt-3 h-full overflow-y-scroll text-sm text-slate-600'>
                  <div className='reset-tw'>
                    <Markdown>{content}</Markdown>
                  </div>
                </div>
          )

          }

          
        </div>
      </div>
    </div>
  )
}

export default BlogTitles
