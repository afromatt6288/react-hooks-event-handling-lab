// Code Keypad Component 
import React from 'react';

function handlePassword() {
    console.log('Entering password...')
}

function Keypad (){
    return (
        <div>
            <input type="password" onChange={handlePassword}/>
        </div>
    )
}

export default Keypad;