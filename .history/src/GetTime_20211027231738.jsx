import React from 'react';

const getCurrTime = () => {
    const currDate = new Date();
    console.log(currDate);
    const currTime = currDate.toLocaleTimeString();
    console.log(currTime); 
}
const GetTime = () => {
    return (
        <>
            <h3 className="title">🔵 <u>React Hooks</u> -  Get Time on Refreshing and Clicking Button using usestate Hooks </h3><br />
            <div className="usestate">
                <h1></h1><br />
                <button className="btn" onClick={getCurrTime}>Get Time</button>
            </div>
        </>
    )
}

export default GetTime;