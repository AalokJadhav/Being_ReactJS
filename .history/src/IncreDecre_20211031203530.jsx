import React from 'react'

const IncreDecre = () => {
    return (
        <>
            <br />
            <hr className="line"></hr>
            <h3 className="title">🔵 <u>React Challenge</u> -  Increment & Decrement on Button Click </h3><br /><br />
            <div className="main_div">
                <div className="center_div">
                    <h1>0</h1>
                    <div className="button_div">
                        <button>Increment</button>
                        <button>Decrement</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IncreDecre;