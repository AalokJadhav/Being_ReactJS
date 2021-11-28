import React, { useState } from 'react';


const Forms = () => {
    const [name, setName] = useState();

    const InputChange = (event) => {
        console.log(event.target.value);
        setName(event.target.value)
    }
    return (
        <>
              <hr className="line"></hr>      
              <h3 className="title">🔵 <u>Forms</u> -  Controlled Vs UnControlled Components </h3><br /><br />
            <div className="form">
                <h1 className="hello"> Hello {name} </h1>
                <input type="text" placeholder="Enter Your Name" onChange={InputChange}></input>
                <button className="btn">Submit</button>
            </div>
            <br/>
      <hr className="line"></hr>
        </>
    )
}

export default Forms;