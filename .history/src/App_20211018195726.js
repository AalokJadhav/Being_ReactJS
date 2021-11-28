import React from "react";
import Navbar from './Header'
import List from "./List";
import CurrentDate from "./CurrentDate";
import RandomImages from "./RandomImages";
import InlineCss from "./InlineCss";
import SimpleGreeting from './SimpleGreeting';
import AllCharacter from "./AllCharacter";
import Calculator from './App';
import Card from './Card';
import Sdata from './Sdata';
// import FullName from "./FullName";
import './index.css';
import GoogleFont from "./GoogleFont";











<>


  <h4>🔵 <u>Simple Calculator</u> - </h4><br />
  <Calculator />
  <br />

  <h4>🔵 <u>Props & Array with Map Arrow Function</u> - Netflix Card</h4><br />
  <h1 className="heading_style" >Netflix Favorite  Series</h1>
  {Sdata.map((val) => {
    return (
      <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link} />
    )
  })
  }
</>




function App() {

  return (
    <>
      <Navbar /><br /><br /><br /><br />
      <h4>Hello  World From ReactJS...✋</h4><br />
      <CurrentDate />
      <RandomImages />
      <InlineCss /> <br/>
      <GoogleFont />
      <SimpleGreeting />
      <List />
      <AllCharacter />
      {/* <Calculator/> */}
    </>
  );
}



export default App;


// In Pure JavaScript
// var h3 = document.createElement('h3');
// h3.innerHTML = 'Hello  World From Pure JavaScript...❤❤❤';
// document.getElementById('root').appendChild(h3);