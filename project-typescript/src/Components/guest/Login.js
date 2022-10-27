import { Input } from './Input'
import { Button } from '../shared/Button'
import { useState } from 'react'

export const Login = ({handleLogIn, user}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const userObject = {
        username: username,
        password: password
      }

    const handleSubmit = () => {
        localStorage.setItem('user', JSON.stringify({username, password}))
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
 
