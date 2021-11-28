// var React = require ('react');
// var ReactDom = require ('react-dom');

import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(<h1>Hello  World From ReactJS...❤❤❤</h1>,
  document.getElementById('root'));



// In Pure JavaScript

var h1 = document.createElement('h1');
h1.innerHTML = 'Hello  World From JavaScript...❤❤❤';
document.getElementById('root').appendChild(h1);
