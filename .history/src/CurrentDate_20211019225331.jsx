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
        </>
    );
  }

export default CurrentDate;