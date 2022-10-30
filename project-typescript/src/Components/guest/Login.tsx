import { Input } from './Input'
import { Button } from '../shared/Button'
import { useState, FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface LoginProps {
    handleLogOut: () => void;
    user: string;
    setUser: (user: string) => void;
}

export const Login: FC<LoginProps> = ({handleLogOut, user, setUser}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const userObject: {username: string, password: string} = {
        username: username,
        password: password
      }

    const handleSubmit = (): void => {
        localStorage.setItem('user', JSON.stringify({username, password}))
        navigate('/home')
        const userFromLocalStorage = localStorage.getItem('user')
        if(userFromLocalStorage){
            const userParsed = JSON.parse(userFromLocalStorage)
        setUser(userParsed.username)

    }}


    return ( 
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <Input inputType={"text"} setInputValue={setUsername}/>
            <label>Password:</label>
            <Input inputType={"password"} setInputValue={setPassword}/>
            <Button buttonText={"Log in"} handleLogOut={handleLogOut} user={user}/>
        </form>
     );
}
 
