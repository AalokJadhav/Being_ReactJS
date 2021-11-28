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
import SlotMachine from "./SlotMachine";
import Hello from "./HelloWorld";
import UseState from "./UseState";
import GetTime from "./GetTime";


function App() {

  return (
    <>
      <Navbar /><br /><br /><br /><br />
      <Hello />
      <CurrentDate />
      <RandomImages />
      <InlineCss /> <br />
      <GoogleFont />
      <SimpleGreeting />
      <List />
      <RComponents />
      <NetflixCard />
      <SlotMachine /><br /><br/>
      <UseState />
      <GetTime />
    </>
  );
}



export default App;


//In Pure JavaScript
var h4 = document.createElement('h3');
h4.innerHTML = 'Hello  World From Pure JavaScript...❤❤❤';
document.getElementById('root').appendChild(h4);
