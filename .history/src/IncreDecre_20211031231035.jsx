import React, { useState } from 'react'

const IncreDecre = () => {

    const [num, setnum] = useState(8);

    const incNum = () => {
        setnum(setnum + 1);
    }

    const decNum = () => {
        setnum(setnum - 1);
    }

    return (
        <>
            <br />
            <hr className="line"></hr>
            <h3 className="title">🔵 <u>React Challenge</u> -  Increment & Decrement on Button Click </h3><br /><br />
            <div className="main_div1">
                <div className="center_div1">
                    <h1 className="challenge_h1">{num}</h1>
                    <div className="button_div">
                        <button className="button_" onClick={incNum}>Increment</button>
                        <button className="button_" onClick={decNum}>Decrement</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IncreDecre;