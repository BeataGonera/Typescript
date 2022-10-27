import { Link } from 'react-router-dom'
import { Button } from '../shared/Button'

export const AuthenticatedHomePage = ({username, handleLogOut, user}) => {
    return ( 
        <div className="home">
            <p>Welcome to my website {user}!</p>
            <Button buttonText={"Log out"} handleLogOut={handleLogOut} user={user}/>
        </div>
     );
}
 
