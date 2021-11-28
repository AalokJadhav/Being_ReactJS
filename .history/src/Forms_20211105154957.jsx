import React, { useState } from 'react';


const Forms = () => {
    const [name, setName] = useState();
    const [fullname, setFullName] = useState();

    const InputChange = (event) => {
        // console.log(event.target.value);
        setName(event.target.value)
    }

    const onsubmits = (event) => {
        event.preventDefault();
        setFullName(name);
    }
    return (
        <>
              <hr className="line"></hr>      
              <h5 className="title">🔵 <u>Forms</u> -  Controlled Vs UnControlled Components </h5><br /><br />
              <form onSubmit={onsubmits}>
            <div className="form">
                <h1 className="hello"> Hello {fullname} </h1>
                <input type="text" placeholder="Enter Your Name" onChange={InputChange} value={name}></input>
                <button className="btn" type="submit">Submit</button>
            </div>
            </form>
        </>
    )
}

export default Forms;