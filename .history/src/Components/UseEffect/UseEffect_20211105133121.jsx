import React, { useState } from 'react';

const UseEffect = () => {
    const [num, setNum] = useState();

    const useEffects = () => {
        alert ('Clicked..')
    }
    return (
        <>
            <br />
            <hr className="line"></hr>
            <h5 className="title">🔵<u>React Hook</u> - UseEffect</h5><br /><br />

            <button onClick={() => {
                    setNum(num + 1);
                 }}
                >Click Me... {num}</button>
        </>
    )
} 

export default UseEffect;