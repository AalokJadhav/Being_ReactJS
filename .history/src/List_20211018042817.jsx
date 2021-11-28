import React from "react";
import Header from './Header'

function List() {
  return (
    <><Header /><div className="content">
      <h5>Netflix Top Series</h5>

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
