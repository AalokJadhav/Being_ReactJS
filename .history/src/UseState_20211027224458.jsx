import React, { useState } from "react";


const UseState = () => {
    const state = useState;
    // console.log(state);

    const [count, setCount] = useState(0);

    const IncNo = () => {
        setCount(count + 1);
        if(count === 10) {
            setCount(count - 1);
        }
    }

    return (

        <>
            <h3 className="title">🔵 <u>React Hooks</u> -  useState </h3><br />
            <p>const [ current value,(function = updated value)] = useSate(initial value)</p>
            <div className="usestate">
                <h1>{count}</h1><br/>
                <button className="btn" onClick={IncNo}>Click Me 👆</button>
            </div>
        </>
    )
}

export default UseState;