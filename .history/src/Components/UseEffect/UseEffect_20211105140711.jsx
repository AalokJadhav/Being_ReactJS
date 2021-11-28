import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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

            <button className="btn btn-success" onClick={() => {
                    setNum(num + 1);
                 }}
                >Click Me... {num}</button>

                <br/>

                <button  className="btn btn-info" onClick={() => {
                    setNum(nums + 1);
                 }}
                >Click Me... {nums}</button>
        </>
    )
} 

export default Hooks;