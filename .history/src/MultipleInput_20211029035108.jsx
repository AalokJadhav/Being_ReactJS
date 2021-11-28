import React, { useState } from 'react';



const MultipleInput = () => {
    const [firstname, setfirstname] =  useState();
    const [lastname, setlastname] =  useState();

    setfirstname()
        const submit = (event) => {
            event.preventDefault();
        }

      const  input1 = (event) => {
            console.log(event.target.value);
            setfirstname(firstname)
        }

        const  input2 = (event) => {
            console.log(event.target.value);
            setlastname(lastname)
        }
    return (

        <>
            <br />
            <hr className="line"></hr>
            <h3 className="title">🔵 <u>Forms</u> -  Handling Complex Multiple Input Forms State </h3><br /><br />
            <form onSubmit={submit}>
                <div className="loginform1">
                <h1 className="hello"> Hello</h1>
                    <input type="text" placeholder="first name" onChange={input1} value={firstname}></input>
                    <br />
                    <input type="text" placeholder="last name" onChange={input2} value={lastname}></input>
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