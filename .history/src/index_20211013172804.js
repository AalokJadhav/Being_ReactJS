// var React = require ('react');
// var ReactDom = require ('react-dom');

import React from 'react';
import ReactDom from 'react-dom';


const fullDate = new Date();
const date = fullDate.toLocaleDateString();
const time = fullDate.toLocaleTimeString();

const RandomImgUrl = 'https://source.unsplash.com/random';
ReactDom.render(
  //Fragments in ReactJS - Use <> </>  or <React.Fragment></React.Fragment>
  <>
    <h1>Hello  World From ReactJS...✋</h1>

    <h4>🧿 <u>Display Current date and time in JSX</u> -</h4>
    <p>Current Date is {`${date}`} </p>
    <p>Current Time is {`${time} `} </p>

  <h4>🧿 <u>JSX Attributes for random image</u> -</h4>

  <img src={RandomImgUrl} alt=  'random image' />
  </>,
  document.getElementById('root'));



// In Pure JavaScript
var h3 = document.createElement('h3');
h3.innerHTML = 'Hello  World From Pure JavaScript...❤❤❤';
document.getElementById('root').appendChild(h3);
