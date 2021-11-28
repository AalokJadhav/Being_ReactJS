import React from "react";


const fullDate = new Date();
const date = fullDate.toLocaleDateString();
const time = fullDate.toLocaleTimeString();


function CurrentDate() {
    return (
        <>
        <h4>🔵 <u>Display Current date and time in JSX</u> -</h4><br />
        <div className="content">
          <p>Current Date is {`${date}`} </p>
          <p>Current Time is {`${time} `} </p>
        </div>
        <br />

        <h4>🔵 <u>Slot Machine Game</u> - </h4><br />
            <h1 className="heading_style"> 🎰<span className="flash">Slot Machine Game</span>🎰</h1>
            <br />
            <div className="slotmachine">
                <h3> A</h3>
                <hr />
                <h3> A</h3>
                <hr />
                <h3> A</h3>
                <hr />
                <h3> A</h3>
                <hr />
            </div>

        </>
    );
  }

export default CurrentDate;