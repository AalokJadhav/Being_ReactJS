import React, { useState } from 'react';

const GetTime = () => {
    let currTime = new Date().toLocaleTimeString();
    // console.log(currTime);
// const getCurrTime = () => {

 
//     const [currDate, setDate ] = useState(currTime);
//     setDate(currTime);
// }
    return (
        <>
            <h3 className="title">🔵 <u>React Hooks</u> -  Get Time on Refreshing and Clicking Button using usestate Hooks </h3><br />
            <div className="usestate">
                <h1>{currTime}</h1><br />
                <button className="btn" onClick={getCurrTime}>Get Time</button>
            </div>
        </>
    )
}

export default GetTime;