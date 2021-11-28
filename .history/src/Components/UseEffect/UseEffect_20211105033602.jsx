import  React, { useState } from 'react';

const UseEffect = () => {
    const [num, seNum] = useState();

    return (
        <>
            <br />
            <hr className="line"></hr>
            <h5 className="title">🔵<u>React Hook</u> - UseEffect</h5><br /><br />

            <button>Click Me... {num}</button>
        </>
    )
}

export default UseEffect;