// var React = require ('react');
// var ReactDom = require ('react-dom');

import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import {AllCharacters, fullName} from './App';

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
ReactDom.render(

  //Fragments in ReactJS - Use <> </>  or <React.Fragment></React.Fragment>
  <>
  
    <h1 className="heading">Being React</h1><br />
    <h3>Hello  World From ReactJS...✋</h3><br />

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
    <App />
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
  </>,
  document.getElementById('root'));
<br />


// In Pure JavaScript
var h3 = document.createElement('h3');
h3.innerHTML = 'Hello  World From Pure JavaScript...❤❤❤';
document.getElementById('root').appendChild(h3);
