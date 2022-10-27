import { Input } from './Input'
import { Button } from '../shared/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = ({handleLogIn, user, setUser}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const userObject = {
        username: username,
        password: password
      }

    const handleSubmit = () => {
        localStorage.setItem('user', JSON.stringify({username, password}))
        navigate('/home')
        const userFromLocalStorage = JSON.parse(localStorage.getItem("user"))
        setUser(userFromLocalStorage.username)
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <Input inputType={"text"} setInputValue={setUsername}/>
            <label>Password:</label>
            <Input inputType={"password"} setInputValue={setPassword}/>
            <Button buttonText={"Log in"} handleLogIn={handleLogIn} user={user}/>
        </form>
     );
}
 
