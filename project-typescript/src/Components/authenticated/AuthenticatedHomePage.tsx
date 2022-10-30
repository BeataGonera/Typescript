import { Link } from 'react-router-dom'
import { Button } from '../shared/Button'
import { FC } from 'react'

interface AuthenticatedHomePageProps {
    handleLogOut: () => void;
    user: string;
}

export const AuthenticatedHomePage: FC<AuthenticatedHomePageProps> = ({handleLogOut, user}) => {
    return ( 
        <div className="home">
            <p>Welcome to my website {user}!</p>
            <Button buttonText={"Log out"} handleLogOut={handleLogOut} user={user}/>
        </div>
     );
}
 
