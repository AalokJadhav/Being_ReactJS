import React from "react";

const LoginForm  = () => {
    return (
        <>
             <hr className="line"></hr>      
              <h3 className="title">🔵 <u>Forms</u> -  Login Form Submit </h3><br /><br />
            <div className="loginform">
                <h1 className="hello"> Hello</h1>
                <input type="text" placeholder="Enter Your Name"></input>
                <input type="password" placeholder="password please"></input>
                <button className="btn">Submit</button>
            </div>
        </>
    )
}

export default LoginForm;