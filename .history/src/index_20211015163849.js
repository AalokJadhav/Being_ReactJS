// var React = require ('react');
// var ReactDom = require ('react-dom');

import React from 'react';
import ReactDom from 'react-dom';
import './index.css';



const fullDate = new Date();
const date = fullDate.toLocaleDateString();
const time = fullDate.toLocaleTimeString();

const CurrDate = new Date(2021, 14, 10, 21);
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

    <App  />,
    
  document.getElementById('root'));
<br />


// In Pure JavaScript
var h3 = document.createElement('h3');
h3.innerHTML = 'Hello  World From Pure JavaScript...❤❤❤';
document.getElementById('root').appendChild(h3);
