import React, {useState} from 'react';
import ReactDOM from 'react-dom';

export default function ButtonRow(){

    const [resourceType,pressedState] = useState('2');

    
    
    return (
        <>
        <div>
            <button onClick={() => pressedState('1')}>Uno</button>
            <button onClick={() => pressedState('2')}>Dos</button>
            <button onClick={() => pressedState('3')}>Tres</button>
        </div>
        <h1>{resourceType}</h1>
        </>
         );
}
