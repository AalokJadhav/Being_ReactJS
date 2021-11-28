import React, { useState } from 'react';



const LoginForm = () => {
    const [FullName, setFullName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: ''
    });


    const submit = (event) => {
        event.preventDefault();
        alert('form submitted..!')
    }

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        // const value = event.target.value;
        // const name = event.target.name;

        const {value, name} = event.target

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
                
            }else if (name === 'email') {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    phone: preValue.phone

                }
            
        }else if (name === 'phone') {
            return {
                fname: preValue.fname,
                lname: preValue.lname,
                email: preValue.email,
                phone: value
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
                    <input type="text" placeholder="email" onChange={inputEvent} name="email" value={FullName.email}></input>
                    <br />
                    <input type="number" placeholder="phone number" onChange={inputEvent} name="phone" value={FullName.phone}></input>
                    <br />
                    <button className="btn" type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default LoginForm;