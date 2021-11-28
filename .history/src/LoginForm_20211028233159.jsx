import React, { useState } from "react";


const LoginForm  = () => {
    const [fullName, setFullName] = useState()
const submit = (event) => {
    event.preventDefault();
    setFullName(firstname);
}

const InputEvent = (event) => {
        console.log(event.target.value);
        setname(event.target.value)
}

const InputEvent1 = (event) => {
    console.log(event.target.value);
    setlastname(event.target.value)
}
    // const [firstname, setfirstname] = useState();
    // setname(firstname);

    // const [lastname, setlastname] = useState()
    // setpass(lastname)
    return (
        <>
        <br/>
             <hr className="line"></hr>      
              <h3 className="title">🔵 <u>Forms</u> -  Login Form Submit </h3><br /><br />
            <div className="loginform">
                <h1 className="hello"> Hello {FullName}</h1>
                <form onSubmit={submit}>
                <input type="text" placeholder="first Name" onChange={InputEvent} value={firstname}></input>
                <input type="password" placeholder="last name" onChange={InputEvent1} value={lastname}></input>
                <button className="btn" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default LoginForm;