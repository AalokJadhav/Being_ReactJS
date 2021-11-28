import React, { useState } from "react";

const DigiClock =  () => {
    let NewTime = new Date().toLocaleTimeString();
    // console.log(NewTime);
    
    const [currTime, setTime] = useState(NewTime);

    //     NewTime = new Date().toLocaleTimeString();
    //     setTime(NewTime);
    return (
        <>
             <h3 className="title">🔵 <u>React Hooks</u> -  Digital Clock</h3><br /><br />
            <div className="usestate">
                <h1>{currTime}</h1><br />
            </div>
        </>
    )
}

export default DigiClock;