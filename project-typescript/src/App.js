import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import './App.css';
import { AuthenticatedHomePage } from './Components/authenticated/AuthenticatedHomePage'
import { Login } from './Components/guest/Login'

function App() {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState("Becia")

  const navigate = useNavigate();

  const handleLogOut = () => {
    setUser(null)
    localStorage.removeItem("user")
    navigate('/login')
  }

  useEffect(() => {
    if(localStorage.getItem('user') !== null){
      const isUser = JSON.parse(localStorage.getItem('user'))
      setUser(isUser.username)
    }
  },[user])

    if(user){
      return (
     <AuthenticatedHomePage username={username} user={user} handleLogOut={handleLogOut}/> 
      );
    }

    return(
        <Routes>
        <Route path='/login' element={ <Login user={user} />}/>
        </Routes>
      )
    
}

export default App;
