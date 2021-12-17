// var React = require ('react');
// var ReactDom = require ('react-dom');

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDom.render(
<BrowserRouter>
<App />
</BrowserRouter>,
document.getElementById('root'));
