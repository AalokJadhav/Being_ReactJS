import React from "react";

const LoginForm  = () => {
    return (
        <>
        <br/>
             <hr className="line"></hr>      
              <h3 className="title">🔵 <u>Forms</u> -  Login Form Submit </h3><br /><br />
            <div className="loginform">
                <h1 className="hello"> Hello</h1>
                <form onSubmit={submit}>
                <input type="text" placeholder="Enter Your Name"></input>
                <input type="password" placeholder="password"></input>
                <button className="btn">Submit</button>
                </form>
            </div>
        </>
    )
}

export default LoginForm;