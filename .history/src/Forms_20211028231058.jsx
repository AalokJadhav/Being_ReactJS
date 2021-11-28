import React, { useState } from 'react';


const Forms = () => {
    const [name, setName] = useState();
    const [fullname, setFullName] = useState();

    const InputChange = (event) => {
        console.log(event.target.value);
        setName(event.target.value)
    }

    const onsubmits = () => {
        setFullName(name);
    }
    return (
        <>
              <hr className="line"></hr>      
              <h3 className="title">🔵 <u>Forms</u> -  Controlled Vs UnControlled Components </h3><br /><br />
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