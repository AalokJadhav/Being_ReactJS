import React, { useState } from "react";


const LoginForm = () => {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [fullName, setFullName] = useState();

    const submit = (event) => {
        event.preventDefault();
        setFullName(firstname);
    }

    const InputEvent = (event) => {
        console.log(event.target.value);
        setfirstname(event.target.value)
    }

    const InputEvent1 = (event) => {
        console.log(event.target.value);
        setlastname(event.target.value)
    }
    return (
        <>
            <br />
            <hr className="line"></hr>
            <h3 className="title">🔵 <u>Forms</u> -  Handling Single Input Forms State
            </h3><br /><br />
            <form onSubmit={submit}>
                <div className="loginform">
                    <h1 className="hello"> Hello {fullName}</h1>
                    <input type="text" placeholder="first name" onChange={InputEvent} value={firstname}></input>
                    <br />
                    <input type="text" placeholder="last name" onChange={InputEvent1} value={lastname}></input>
                    <br />
                    <button className="btn" type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default LoginForm;