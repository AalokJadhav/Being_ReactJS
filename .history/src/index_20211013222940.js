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
    <h1 className="heading">Being React</h1><br />
    <h3>Hello  World From ReactJS...✋</h3><br />

    <h4>🔵 <u>Display Current date and time in JSX</u> -</h4>
    <div className="content">
      <p>Current Date is {`${date}`} </p>
      <p>Current Time is {`${time} `} </p>
    </div>
    <br />

    <h4>🔵 <u>JSX Attributes for random image</u> -</h4>
    <div className="content">
      <h5 contentEditable="true">This is for ContentEditable</h5>
      <img src={RandomImgUrl} alt='random image1' width="33%" height="5%" />
      <img src={RandomImgUrl1} alt='random image2' width="33%" height="5%" />
      <img src={RandomImgUrl2} alt='random image3' width="33%" height="5%" />
    </div>
    <br />

        <h4>🔵 <u>How to use Google Font</u> -</h4>
    <div className="content">
      
    </div>
    <br />

    <h4>🔵 <u>JSX Attributes for random image</u> -</h4>
    <div className="content">
      <h5 contentEditable="true">This is for ContentEditable</h5>
      
    </div>
    <br />

  </>,
  document.getElementById('root'));
<br />


// In Pure JavaScript
var h3 = document.createElement('h3');
h3.innerHTML = 'Hello  World From Pure JavaScript...❤❤❤';
document.getElementById('root').appendChild(h3);
