import React from "react";


const fullDate = new Date();
const date = fullDate.toLocaleDateString();
const time = fullDate.toLocaleTimeString();


function CurrentDate() {
  return (
    <>
      <h5 className="title">🔵 <u>Display Current date and time in JSX</u> -</h5><br />
      <div className="content">
        <p>Current Date is {`${date}`} </p>
        <p>Current Time is {`${time} `} </p>
      </div>
      <hr className="line"></hr>
    </>
  );
}

export default CurrentDate;