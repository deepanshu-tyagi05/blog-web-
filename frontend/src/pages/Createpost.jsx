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
<section className='create-post-section'>
    <h1>Create-Post</h1>
    <form  onSubmit={handlesubmit}>
        <input type="file" name='image' accept='image/*' />
        <input type="text"  name='caption' />
       <button type='submit'>Submit</button>
    </form>
</section>
  )
}

export default Createpost