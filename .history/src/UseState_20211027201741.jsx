import React from "react";


const IncNo = () => {
    console.log('clicked');
}
const UseState = () => {

    return (

        <>
            <h3 className="title">🔵 <u>React Hooks</u> -  useState </h3><br />
            <div className="content">
                <button className="btn" onClick={IncNo}>Click Me 👆</button>
            </div>
        </>
    )
}

export default UseState;