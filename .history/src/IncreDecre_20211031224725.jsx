import React from 'react'

const IncreDecre = () => {
    return (
        <>
            <br />
            <hr className="line"></hr>
            <h3 className="title">🔵 <u>React Challenge</u> -  Increment & Decrement on Button Click </h3><br /><br />
            <div className="main_div1">
                <div className="center_div">
                    <h1 className="challenge_h1">0</h1>
                    <div className="button_div">
                        <button className="button_">Increment</button>
                        <button className="button_">Decrement</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IncreDecre;