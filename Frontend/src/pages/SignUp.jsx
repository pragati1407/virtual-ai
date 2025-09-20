import React, { useContext, useState } from 'react'
import bg from "../assets/image.png"
import { useNavigate } from 'react-router-dom'
import { userDataContext } from '../context/userContext'
import axios from 'axios'

function signUp() {
  const {serverUrl,userData, setUserData} = useContext(userDataContext)
  const navigate = useNavigate()
  const[name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [password,setPassword] = useState("")
  const[err,setErr] = useState("")

  const handleSignUp = async (e)=>{
    e.preventDefault()
    setErr("")
   setLoading(true)
    
   

    try {
      let result = await axios.post(`${serverUrl}/api/auth/signup`,{   // ✅ fixed path
        name,email,password
      },
      {withCredentials:true})
      setUserData(result.data)
      navigate("/customize")
    } catch (error) {
      console.log(error)
      setErr(error.response.data.message)
      setLoading(false)

    }
  }
    
  return (
    <div className='w-full h-[100vh] bg-cover flex justify-center items-center' style={{backgroundImage:`url(${bg})`}}>
      <form className='w-[60%] h-[400px] max-w-[400px] bg-[#00000069] 
      backdrop-blur shadow-lg shadow-grey flex flex-col items-center 
      justify-center gap-[20px] px-[20px]' onSubmit={handleSignUp}>
        
        <h1 className='text-white text-[20px]'>
          Register to <span className='text-blue-400'>Hogwart virtual Assistant</span>
        </h1>
        
        <input type="text" placeholder='Enter your Name' className='w-full h-[50px] outline-none border-2 
        border-white bg-transparent text-white placeholder-gray-300 rounded-full px-[20px]' required onChange={(e)=>setName(e.target.value)}
        value={name} />

        <input type="email" placeholder='Email' className='w-full h-[50px] outline-none border-2 
        border-white bg-transparent text-white placeholder-gray-300 rounded-full px-[20px]' required onChange={(e)=>setEmail(e.target.value)}
        value={email}/>

        <input type="text" placeholder='******' className='w-full h-[50px] outline-none border-2 
        border-white bg-transparent text-white placeholder-gray-300 rounded-full px-[20px]' required onChange={(e)=>setPassword(e.target.value)}
        value={password} />
        {err.length>0 && <p className='text-red-500'>
          *{err}
          </p>}
        <button className='min-w-[90px] h-[40px] bg-white rounded-full' disabled={loading}>{ loading?"loading....":"Sign Up"}</button>

        <p className='text-white cursor-pointer' onClick={()=>navigate('/signin')}>
          Already have an account? <span className='text-blue-400'>Sign In</span>
        </p>
      </form>
    </div>
  )
}

export default signUp
