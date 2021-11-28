import React from "react";
import Navbar from './Header'
import {PureJavascript} from "./PureJavascript";
import List from "./List";
import AllCharacter from './App';
import Calculator from './App';
import Card from './Card';
import Sdata from './Sdata';
import FullName from "./FullName";
import './index.css';
import CurrentDate from "./CurrentDate";
import RandomImages from "./RandomImages";
import GoogleFont from "./GoogleFont";



const CurrDate = new Date(2021, 14, 10, 9);
const hour = CurrDate.getHours();
let greeting = '';

const cssStyle = {}

if (hour >= 1 && hour < 12) {
  greeting = 'Good Mooring..🙂';
  cssStyle.color = 'green';
} else if (hour >= 12 && hour < 19) {
  greeting = 'Good Afternoon..🙄';
  cssStyle.color = 'orange';
} else {
  greeting = 'Good Night..😴';
}





<>




  



  <h4 style={{ color: 'red', fontFamily: 'serif' }}>🔵 <u>Inline or Internal CSS Styling</u> -</h4>
  <div className="content">

  </div>
  <br />

  <h4>🔵 <u>Challenge</u> - As Timeline change the expression of farewell (ie.Good Morning/Afternoon/Night)</h4><br />
  <div className="challenge1">
    <h1>Hello World...<span style={cssStyle}> {greeting}</span></h1>
  </div>
  <br />

  <h4>🔵 <u>React Components</u> - Seprate Piece of code into Components</h4><br />
  <br />

  <AllCharacter />
  <br />

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
      <PureJavascript />
      <CurrentDate />
      <RandomImages />
      <GoogleFont />
      <List />
      <FullName />
      {/* <Calculator/>
        <AllCharacter /> */}
    </>
  );
}



export default App;


