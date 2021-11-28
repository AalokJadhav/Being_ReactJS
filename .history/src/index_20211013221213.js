// var React = require ('react');
// var ReactDom = require ('react-dom');

import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const fullDate = new Date();
const date = fullDate.toLocaleDateString();
const time = fullDate.toLocaleTimeString();

const RandomImgUrl = 'https://picsum.photos/2000';
const RandomImgUrl1 = 'https://picsum.photos/900';
const RandomImgUrl2 = 'https://picsum.photos/800';
ReactDom.render(
  //Fragments in ReactJS - Use <> </>  or <React.Fragment></React.Fragment>
  <>
    <h1 className="heading">Being React</h1>
    <h3>Hello  World From ReactJS...✋</h3>

    <h4>🔵 <u>Display Current date and time in JSX</u> -</h4>
    <p>Current Date is {`${date}`} </p>
    <p>Current Time is {`${time} `} </p>

    <h4>🔵 <u>JSX Attributes for random image</u> -</h4>
    <h5 contentEditable="true">This is for ContentEditable</h5>
    <img src={RandomImgUrl} alt='random image1' width="33%" height="5%" />
    <img src={RandomImgUrl1} alt='random image2' width="33%" height="5%" />
    <img src={RandomImgUrl2} alt='random image3' width="33%" height="5%" />

    <h4>🔵 <u>How to use Google Fonts</u> -</h4>

  </>,
  document.getElementById('root'));



// In Pure JavaScript
var h3 = document.createElement('h3');
h3.innerHTML = 'Hello  World From Pure JavaScript...❤❤❤';
document.getElementById('root').appendChild(h3);
