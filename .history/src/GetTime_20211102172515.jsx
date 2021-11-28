import React, { useState } from 'react';

const GetTime = () => {
    let NewTime = new Date().toLocaleTimeString();
    // console.log(NewTime);
    
    const [currTime, setTime] = useState(NewTime);

    const getCurrTime = () => {
        NewTime = new Date().toLocaleTimeString();
        setTime(NewTime);
    }
    return (
        <>
              <hr className="line"></hr>      
            <h5 className="title">🔵 <u>React Hooks</u> -  Get Time on Refreshing and Clicking Button using usestate Hooks </h5><br /><br />
            <div className="usestate">
                <h1>{currTime}</h1><br />
                <button className="btn" onClick={getCurrTime}>Get Time ⏲</button>
            </div>
        </>
    )
}

export default GetTime;