import React, { useState, useEffect } from 'react';

const Hooks = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(() => {
        alert ('Welcome To The React App 🙏');
    },[num])
    return (
        <>
            <br />
            <hr className="line"></hr>
            <h5 className="title">🔵<u>React Hook</u> - UseEffect</h5><br /><br />
            <div className="content">
            <button  className = "btn1" onClick={() => {
                    setNum(num + 1);
                 }}
                >Click Me... {num}</button>

                <br/><br/>

                <button className = "btn1" onClick={() => {
                    setNums(nums + 1);
                 }}
                >Click Me... {nums}</button>

                </div>
        </>
    )
} 

export default Hooks;