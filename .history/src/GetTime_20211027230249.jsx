import React from 'react';

const GetTime = () => {
    return (
        <>
            <h3 className="title">🔵 <u>React Hooks</u> -  Get Time on Refreshing and Clicking Button using usestate Hooks </h3><br />
            <div className="usestate">
                <h1>{count}</h1><br />
                <button className="btn" onClick={IncNo}>Click Me 👆</button>
            </div>
        </>
    )
}

export default GetTime;