import React from "react";
import './index.css';

import Navbar from './Header'
import List from "./List";
import CurrentDate from "./CurrentDate";
import RandomImages from "./RandomImages";
import InlineCss from "./InlineCss";
import SimpleGreeting from './SimpleGreeting';
import GoogleFont from "./GoogleFont";
import RComponents from "./RComponents";
import NetflixCard from "./NetflixCard";

<>

</>

function App() {

  return (
    <>
      <Navbar /><br /><br /><br /><br />
      <h4>Hello  World From ReactJS...✋</h4><br />
      <CurrentDate />
      <RandomImages />
      <InlineCss /> <br />
      <GoogleFont />
      <SimpleGreeting />
      <List />
      <RComponents />
      <NetflixCard />
    </>
  );
}



export default App;


In Pure JavaScript
var h3 = document.createElement('h3');
h3.innerHTML = 'Hello  World From Pure JavaScript...❤❤❤';
document.getElementById('root').appendChild(h3);