import { FC } from 'react';

interface ButtonProps {
    buttonText: string;
    handleLogOut: () => void;
    user: string;
}

export const Button: FC<ButtonProps> = ({buttonText, handleLogOut, user}) => {
    if(user){
        console.log(user)
    return ( 
        <button onClick={handleLogOut}>{buttonText}</button>
     );
    }

    return(
        <button>{buttonText}</button>
    )
}
 
