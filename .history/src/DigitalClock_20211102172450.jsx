import React, { useState } from "react";

const DigiClock =  () => {
    let NewTime = new Date().toLocaleTimeString();
    // console.log(NewTime);
    
    const [currTime, setTime] = useState(NewTime);

    const UpdateTime = () => {

        NewTime = new Date().toLocaleTimeString();
        setTime(NewTime);
    }

    setInterval(UpdateTime, 1000);
    return (
        <>
              <hr className="line"></hr>      
             <h5 className="title">🔵 <u>React Hooks</u> -  Digital Clock</h5><br /><br />
            <div className="usestate">
                <h1>{currTime}</h1><br />
            </div>
        </>
    )
}

export default DigiClock;