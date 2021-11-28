import React from "react";




function Navbar() {

  return (
    <div class="header" style={{ color: 'red'}}>
        <a href="#default" class="logo">Being React</a>
      <div class="header-right">
        <h4 class="active" href="#home">Made with <span style={{ color: 'red'}}>❤</span> by Alok Jadhav</h4>
      </div>
    </div>
  );
}
export default Navbar;