import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import './App.css';
import { AuthenticatedHomePage } from './Components/authenticated/AuthenticatedHomePage'
import { Login } from './Components/guest/Login'


export const App: FC = () => {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState("")


  const navigate = useNavigate();

  const handleLogOut = (): void => {
    setUser("")
    localStorage.removeItem("user")
    navigate('/login')
  }

  useEffect((): void => {
    if(localStorage.getItem('user') !== null){
      const isUser = localStorage.getItem(JSON.stringify('user'))
      if(isUser){
        setUser(isUser)
      }
      navigate('/home')
    }else{
      navigate('/login')
    }

  },[])

    return(
        <Routes>
        <Route path='/home' element={ <AuthenticatedHomePage handleLogOut={handleLogOut} user={user} />}/>
        <Route path='/login' element={ <Login  handleLogOut={handleLogOut} user={user} setUser={setUser} />}/>
        </Routes>
      )
    
}

