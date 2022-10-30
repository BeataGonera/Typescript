import { useState } from 'react';
import { FC } from 'react';

interface InputProps {
    inputType: string;
    setInputValue: (e: string) => void;
}

export const Input: FC<InputProps> = ({inputType, setInputValue}) => {

    return ( 
        <input type={inputType} onChange={(e)=> setInputValue(e.target.value)} required/>
     );
}
 
