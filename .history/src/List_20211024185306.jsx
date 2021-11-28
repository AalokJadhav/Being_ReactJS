import React from "react";
import './index.css';

function List() {
  return (
    <>
      <h3 className="title" >🔵 <u>Order List </u> -</h3><br/>
      <div className="content">
      <h3>Netflix Top Series</h3>
        <ol>
          <li>Stranger Things</li>
          <li>Dark</li>
          <li>Money Heiest</li>
          <li>Elite</li>
          <li>Ozark</li>
        </ol>
      </div>
      <br />
    </>
  );
}

export default List;
