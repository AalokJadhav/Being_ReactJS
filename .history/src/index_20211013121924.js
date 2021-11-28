// var React = require ('react');
// var ReactDom = require ('react-dom');

import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
  //Fragments in ReactJS - Use <> </>  or <React.Fragment></React.Fragment>
  <>
    <h1>Hello  World From ReactJS...❤❤❤</h1>
    <h2>Hello  World From ReactJS...❤❤❤</h2>
    <h3>Hello  World From ReactJS...❤❤❤</h3>

  </>,

  // Challenge 1
  <>
    <h1>Netflix Series</h1>
    <p>List Of Netflix Series</p>
    <ol>
      <li>Squid Game</li>
      <li>The Blacklist</li>
      <li>Money Heist</li>
      <li>Lucifer</li>
      <li>Elite</li>
      <li>Peaky Blinders</li>
      <li>Dark</li>
      <li>Peaky Blinders</li>
      <li>13 Reasons Why</li>
      <li>Arrow</li>
      <li>Stranger Things</li>
    </ol>
  </>,
  document.getElementById('root'));



// In Pure JavaScript
var h1 = document.createElement('h1');
h1.innerHTML = 'Hello  World From JavaScript...❤❤❤';
document.getElementById('root').appendChild(h1);
