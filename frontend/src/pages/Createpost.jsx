import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Createpost = () => {
   const navigate= useNavigate()
const handlesubmit= async(e)=>{
  e.preventDefault()
  const  formData=new FormData(e.target)
  axios.post("http://localhost:3000/create-post",formData ).then((res)=>{
    console.log(res)
  navigate('/feed')
  }).catch((err)=>{
    console.log(err)
    alert("error in creating post")
  })
  
}


 
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 bg-gray-50/50">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 mb-2">Create Post</h1>
          <p className="text-gray-500 text-sm">Share your latest moment with the world</p>
        </div>
        
        <form onSubmit={handlesubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 ml-1">Upload Image</label>
            <input 
              type="file" 
              name="image" 
              accept="image/*" 
              className="block w-full text-sm text-gray-600
                file:mr-4 file:py-3 file:px-6
                file:rounded-xl file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100 transition-all cursor-pointer
                border border-gray-200 rounded-2xl bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 ml-1">Caption</label>
            <textarea 
              name="caption" 
              rows="3"
              placeholder="Write a catchy caption..."
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all resize-none"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Share Post</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Createpost