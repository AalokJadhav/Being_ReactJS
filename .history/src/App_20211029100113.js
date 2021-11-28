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
import IfElse from "./IfElse";
import SlotMachine from "./SlotMachine";
import Hello from "./HelloWorld";
import UseState from "./UseState";
import GetTime from "./GetTime";
import DigiClock from "./DigitalClock";
import Event from './Events';
import Forms from "./Forms";
import SingleInput from './SingleInput';
import MultipleInput from "./MultipleInput";
import LoginForm from "./LoginForm";


function App() {

  return (
    <>
      <Navbar /><br /><br /><br /><br />
      <Hello />
      <CurrentDate />
      <RandomImages />
      <InlineCss />
      <GoogleFont />
      <SimpleGreeting />
      <List />
      <RComponents />
      <NetflixCard />
      <IfElse /><br /><br /><br />
      <SlotMachine /><br /><br />
      <UseState /><br /><br />
      <GetTime /><br /><br />
      <DigiClock />
      <Event />
      <Forms />
      <SingleInput />
      <MultipleInput />
      <LoginForm />
    </>
  );
}



export default App;


//In Pure JavaScript
var h4 = document.createElement('h3');
h4.innerHTML = 'Hello  World From Pure JavaScript...❤❤❤';
document.getElementById('root').appendChild(h4);
