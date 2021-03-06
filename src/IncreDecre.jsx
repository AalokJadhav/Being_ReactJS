import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const IncreDecre = () => {

    const [num, setnum] = useState(0);

    const incNum = () => {
        setnum(num + 1);
    }

    const decNum = () => {
        if (num > 0) {
            setnum(num - 1);
        } else {
            alert('Zero Limit Reach...')
            setnum(0);
        }
    }

    return (
        <>
            <br />
            <hr className="line"></hr>
            <h5 className="title">🔵 <u>React Challenge</u> -  Increment & Decrement on Button Click </h5><br /><br />
            <div className="main_div1">
                <div className="center_div1">
                    <h1 className="challenge_h1">{num}</h1>
                    <div className="button_div">
                        <button className="button_" onClick={incNum}>Increment</button>
                        <button className="button_" onClick={decNum}>Decrement</button>
                    </div>
                    <br/>
                        <h6>Bootstrap Button</h6>
                        <button className="btn btn-danger">Bootstrap</button>
                </div>
            </div>
        </>
    )
}

export default IncreDecre;