import React from 'react';

const MultipleInput = () => {
    return (

        <>
            <br />
            <hr className="line"></hr>
            <h3 className="title">🔵 <u>Forms</u> -  Handling Complex Multiple Input Forms State </h3><br /><br />
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

export default MultipleInput;