export const Button = ({buttonText, handleLogOut, handleLogIn, user}) => {
    if(user){
        console.log(user)
    return ( 
        <button onClick={handleLogOut}>{buttonText}</button>
     );
    }

    return(
        <button onClick={handleLogIn}>{buttonText}</button>
    )
}
 
