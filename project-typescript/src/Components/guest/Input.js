import { useState } from 'react';

export const Input = ({inputType, setInputValue}) => {

    return ( 
        <input type={inputType} onChange={(e)=> setInputValue(e.target.value)} required/>
     );
}
 
