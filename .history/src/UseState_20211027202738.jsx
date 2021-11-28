import React, { useState } from "react";


const UseState = () => {
    const state = useState;
    // console.log(state);

    const [count, setCount] = useState(0);

    const IncNo = () => {
        setCount(count + 1);
        if(count === 10) {
            setCount(--count);
        }
    }

    return (

        <>
            <h3 className="title">🔵 <u>React Hooks</u> -  useState </h3><br />
            <div className="content">
                <h1>{count}</h1>
                <button className="btn" onClick={IncNo}>Click Me 👆</button>
            </div>
        </>
    )
}

export default UseState;