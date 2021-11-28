import React, { useState, useEffect } from 'react';

const Challenge = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        document.title  = `you clicked me at ${num} times`
    })
    return (
        <>
            <br />
            <hr className="line"></hr>
            <h5 className="title">🔵<u>React Hook</u> - useEffect Challenge (changing the title value on button click)</h5><br /><br />

            <button onClick={() => {
                setNum(num + 1);
            }}
            >Click Me... {num}</button>
        </>
    )
}

export default Challenge;