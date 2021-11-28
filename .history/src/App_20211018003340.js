import React from "react";
import Navbar from './Header'
import Heading from "./Heading";
import List from "./List";
import { AllCharacters, Characters, fullName, add, sub, divi, mul } from './App';
import Card from './Card';
import Sdata from './Sdata';

const fullDate = new Date();
const date = fullDate.toLocaleDateString();
const time = fullDate.toLocaleTimeString();

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
const RandomImgUrl = 'https://picsum.photos/2000';
const RandomImgUrl1 = 'https://picsum.photos/900';
const RandomImgUrl2 = 'https://picsum.photos/800';



Characters.forEach(function (data) {
    AllCharacters.push(<li>{data}</li>);
});
<>
<br /><br /><br /><br />
    <h4>Hello  World From ReactJS...✋</h4><br />

    <h4>🔵 <u>Display Current date and time in JSX</u> -</h4><br />
    <div className="content">
      <p>Current Date is {`${date}`} </p>
      <p>Current Time is {`${time} `} </p>
    </div>
    <br />

    <h4>🔵 <u>JSX Attributes for random image</u> -</h4><br />
    <div className="img_div">
      <img src={RandomImgUrl} alt='random image1' />
      <img src={RandomImgUrl1} alt='random image2' />
      <img src={RandomImgUrl2} alt='random image3' />
    </div>
    <br />

    <h4>🔵 <u>How to use Google Font</u> -  see font link in index.html </h4>
    <div className="content">

    </div>
    <br />

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

    <h4>🔵 <u>ES6 Modules, function Import Export</u> - </h4><br />
    <div className="content">
      <h3>F.R.I.E.N.D.S Characters</h3>
      <ol className="content">
        <li>{AllCharacters}</li>
      </ol>
      <h3>{fullName()}</h3>
    </div>
    <br />

    <h4>🔵 <u>Simple Calculator</u> - </h4><br />
    <div className="content">
      <ul className="content">
        <li>Addition = {add(10, 10)} </li>
        <li>Substraction = {sub(10, 10)} </li>
        <li>Division = {divi(40, 9)} </li>
        <li>Multiplication = {mul(10, 10)} </li>
      </ul>
    </div>
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
        <Navbar />
        <Heading />
        <List/>
    </>
    );
}



export default App;
export { AllCharacters, fullName, add, sub, divi, mul};
