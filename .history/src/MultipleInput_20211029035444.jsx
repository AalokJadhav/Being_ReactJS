import React, { useState } from 'react';



const MultipleInput = () => {
    const [firstname, setfirstname] =  useState();
    const [lastname, setlastname] =  useState();

    setfirstname()
        const submit = (event) => {
            event.preventDefault();
            alert('form submitted..!')
        }

      const  input = (event) => {
            console.log(event.target.value);
            setfirstname(event.target.value)
        }

    return (

        <>
            <br />
            <hr className="line"></hr>
            <h3 className="title">🔵 <u>Forms</u> -  Handling Complex Multiple Input Forms State </h3><br /><br />
            <form onSubmit={submit}>
                <div className="loginform1">
                <h1 className="hello"> Hello</h1>
                    <input type="text" placeholder="first name" onChange={input} name="firstname" value={fname}></input>
                    <br />
                    <input type="text" placeholder="last name" onChange={input} name="lastname" value={lname}></input>
                    <br />
                    <input type="text" placeholder="email"></input>
                    <br />
                    <button className="btn" type="submit">Submit</button>
            </div>
            </form>
        </>
    )
}

export default MultipleInput;