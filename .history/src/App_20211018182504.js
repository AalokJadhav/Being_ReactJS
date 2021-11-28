import React from "react";
import Navbar from './Header'
import List from "./List";
import  AllCharacter from './App';
import  Calculator from './App';
import Card from './Card';
import Sdata from './Sdata';
import FullName from "./FullName";
import './index.css';
import CurrentDate from "./CurrentDate";



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




<>




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
        <Navbar /><br/><br/><br/><br/>
        <br /><br /><br /><br />
    <h4>Hello  World From ReactJS...✋</h4><br />
    <CurrentDate />
        <List/>
        <FullName />
        {/* <Calculator/>
        <AllCharacter /> */}
    </>
    );
}



export default App;


// In Pure JavaScript
var h3 = document.createElement('h3');
h3.innerHTML = 'Hello  World From Pure JavaScript...❤❤❤';
document.getElementById('root').appendChild(h3);