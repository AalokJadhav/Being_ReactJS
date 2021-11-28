import React, { useState, useEffect } from 'react';

const Hooks = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(() => {
        alert ('Clicked..')
    })
    return (
        <>
            <br />
            <hr className="line"></hr>
            <h5 className="title">🔵<u>React Hook</u> - UseEffect</h5><br /><br />

            <button onClick={() => {
                    setNum(num + 1);
                 }}
                >Click Me... {num}</button>

                <br/>

                <button  onClick={() => {
                    setNums(nums + 1);
                 }}
                >Click Me... {nums}</button>
        </>
    )
} 

export default Hooks;