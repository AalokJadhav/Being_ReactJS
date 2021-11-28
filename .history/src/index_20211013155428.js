// var React = require ('react');
// var ReactDom = require ('react-dom');

import React from 'react';
import ReactDom from 'react-dom';


const fullDate = new Date();
const date = fullDate.toLocaleDateString();
const time = fullDate.getHours() + ":" + fullDate.getMinutes() + ":" + fullDate.getSeconds();
const hours = date.getHours();
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
const ampm = hours >= 12 ? 'pm' : 'am';
ReactDom.render(
  //Fragments in ReactJS - Use <> </>  or <React.Fragment></React.Fragment>
  <>
    <h1>Hello  World From ReactJS...✋</h1>

    <h4>Display Current date and time in JSX</h4>
    <p>Current Date is {`${date}`} </p>
    <p>Current Time is {`${time} ${ampm}`} </p>


  </>,
  document.getElementById('root'));



// In Pure JavaScript
var h3 = document.createElement('h3');
h3.innerHTML = 'Hello  World From Pure JavaScript...❤❤❤';
document.getElementById('root').appendChild(h3);
