import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'   
import Customize from './pages/Customize'
import { userDataContext } from './context/userContext'
import Home from './pages/Home'

function App() {
  const { userData, setUserData } = useContext(userDataContext)
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          (userData?.assistantImage && userData?.assistantHome) 
            ? <Home /> 
            : <Navigate to="/customize" />
        } 
      />
      
      <Route 
        path="/signup" 
        element={!userData ? <SignUp /> : <Navigate to="/" />} 
      />  

      <Route 
        path="/signin" 
        element={!userData ? <SignIn /> : <Navigate to="/" />}  
      />  

      <Route 
        path="/customize" 
        element={userData ? <Customize /> : <Navigate to="/signin" />}  
      />  
    </Routes>
  )
}

export default App
