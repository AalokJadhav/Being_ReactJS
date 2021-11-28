// var React = require ('react');
// var ReactDom = require ('react-dom');

import React from 'react';
import ReactDom from 'react-dom';

const fullDate = new Date();
const date = fullDate.toLocaleDateString();
const time = fullDate.toLocaleTimeString();

const RandomImgUrl = 'https://picsum.photos/400';
const RandomImgUrl1 = 'https://picsum.photos/500';
const RandomImgUrl2 = 'https://picsum.photos/200';
ReactDom.render(
  //Fragments in ReactJS - Use <> </>  or <React.Fragment></React.Fragment>
  <>
    <h1>Hello  World From ReactJS...✋</h1>

    <h4>🧿 <u>Display Current date and time in JSX</u> -</h4>
    <p>Current Date is {`${date}`} </p>
    <p>Current Time is {`${time} `} </p>

  <h4>🧿 <u>JSX Attributes for random image</u> -</h4>
  <h5 contentEditable="true">This is for ContentEditable</h5>
  <img src={RandomImgUrl} alt=  'random image'  width="33%" height="5%"/>
  <img src={RandomImgUrl1} alt=  'random image'  width="33%" height="5%"/>
  <img src={RandomImgUrl2} alt=  'random image'  width="33%" height="5%"/>

  </>,
  document.getElementById('root'));



// In Pure JavaScript
var h3 = document.createElement('h3');
h3.innerHTML = 'Hello  World From Pure JavaScript...❤❤❤';
document.getElementById('root').appendChild(h3);
