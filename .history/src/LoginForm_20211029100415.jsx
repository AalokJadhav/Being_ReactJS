import React, { useState } from 'react';



const LoginForm = () => {
    const [FullName, setFullName] = useState({
        fname: '',
        lname: '',
    });


    const submit = (event) => {
        event.preventDefault();
        alert('form submitted..!')
    }

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        const value = event.target.value;
        const name = event.target.name;

        setFullName((preValue) => {
            // console.log(preValue);

            if (name === 'fName') {
                return {
                    fname: value,
                    lname: preValue.lname,
                }
                } else if (name === 'lName') {
                    return {
                        fname: preValue.fname,
                        lname: value,
                    }
                
            }
        })
    }

    return (

        <>
            <br />
            <hr className="line"></hr>
            <h3 className="title">🔵 <u>Forms</u> -  React Login Form </h3><br /><br />
            <form onSubmit={submit}>
                <div className="loginform2">
                    <h1 className="hello"> Hello {FullName.fname} {FullName.lname}</h1>
                    <input type="text" placeholder="first name" onChange={inputEvent} name="fName" value={FullName.fname}></input>
                    <br />
                    <input type="text" placeholder="last name" onChange={inputEvent} name="lName" value={FullName.lname}></input>
                    <br />
                    <input type="text" placeholder="email" onChange={inputEvent} name="email" ></input>
                    <br />
                    <input type="text" placeholder="phone number" onChange={inputEvent} name="phone" ></input>
                    <br />
                    <button className="btn" type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default LoginForm;