import React from "react";
import './index.css';
import Title from "./Title";

function List() {
  return (
    <>
    <div className="content">
          <Title />
      <ol>
        <li>Stranger Things</li>
        <li>Dark</li>
        <li>Money Heiest</li>
        <li>Elite</li>
        <li>Ozark</li>
      </ol>
    </div></>
  );
}

export default List;
