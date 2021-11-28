import React, { useState } from 'react';



const MultipleInput = () => {
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
            <h3 className="title">🔵 <u>Forms</u> -  Handling Complex Multiple Input Forms State </h3><br /><br />
            <form onSubmit={submit}>
                <div className="loginform1">
                    <h1 className="hello"> Hello {FullName.fname} {FullName.lname}</h1>
                    <input type="text" placeholder="first name" onChange={inputEvent} name="fname" value={FullName.fname}></input>
                    <br />
                    <input type="text" placeholder="last name" onChange={inputEvent} name="lname" value={FullName.lname}></input>
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