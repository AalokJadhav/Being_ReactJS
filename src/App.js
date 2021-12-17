import React from "react";
import './index.css';
import { Routes, Route} from 'react-router-dom';

import Navbar from './Header'
import List from "./List";
import CurrentDate from "./CurrentDate";
import RandomImages from "./RandomImages";
import InlineCss from "./InlineCss";
import SimpleGreeting from './SimpleGreeting';
import GoogleFont from "./GoogleFont";
import RComponents from "./RComponents";
import NetflixCard from "./NetflixCard";
import IfElse from "./IfElse";
import SlotMachine from "./SlotMachine";
import Hello from "./HelloWorld";
import UseState from "./UseState";
import GetTime from "./GetTime";
import DigiClock from "./DigitalClock";
import Event from './Events';
import Forms from "./Forms";
import SingleInput from './SingleInput';
import MultipleInput from "./MultipleInput";
import LoginForm from "./LoginForm";
import SpreadOpertor from "./SpreadOperator";
import ToDoApp from "./ToDoApp";
import IncreDecre from "./IncreDecre";
import Accordion from "./Components/Accordion/Accordion";
import BootstrapCard from "./BootstrapCard";
import MainComp from './Components/ContextAPI/MainComp';
import Hooks from "./Components/UseEffect/UseEffect";
import Challenge from "./Components/UseEffectChallenge/Challenge";
import Axios from './Components/AxiosUseEffect/Axios';
import Menu from './Components/Router/Pages/Menu';
import About from './Components/Router/Pages/About';
import Contact from './Components/Router/Pages/Contact';
import Error from './Components/Router/Pages/Error';
import Service from './Components/Router/Pages/Service';
import User from './Components/Router/Pages/User';
import SearchFilter from './Components/Router/Pages/SearchFilter';
import  {SignUp} from "./Components/Form-Validation/SignUp";



function App() {

  // Functional Components for React Router

  const Name = () => {
    return <>
    <div className="container">
    <h1> This is Name Page..!</h1>
    </div>
    </>
  }

  return (
    <>
      <Navbar /><br /><br /><br /><br />
      <Hello />
      <CurrentDate />
      <RandomImages />
      <InlineCss />
      <GoogleFont />
      <SimpleGreeting />
      <List />
      <RComponents />
      <NetflixCard />
      <IfElse /><br /><br /><br />
      <SlotMachine /><br /><br />
      <UseState /><br /><br />
      <GetTime /><br /><br />
      <DigiClock />
      <Event />
      <Forms />
      <SingleInput />
      <MultipleInput />
      <LoginForm />
      <SpreadOpertor />
      <ToDoApp />
      <IncreDecre />
      <Accordion />
      <BootstrapCard />
      <MainComp />
      <Hooks />
      <Challenge />
      <Axios />
      <Menu />
      <Routes>
          <Route exact="true" path="/" element={ <About name="About" />} />
          <Route exact="true" path="/service" element={<Service name="Service" />} />
          <Route  exact="true" path="/contact" element={<Contact name="Contact" />}/>
          <Route  path="/contact/Name" element={<Name />}/>
          <Route  exact="true" path="/user/:fname/:lname" element={<User name="User" />}/>
          <Route  exact="true" path="/search" element={<SearchFilter name="Search Filter" />}/>
          <Route  path="*" element={<Error />} />
          {/* <Navigate to="/" /> */}
      </Routes>
      <SignUp />
    </>
  );
}



export default App;


//In Pure JavaScript
var h4 = document.createElement('h3');
h4.innerHTML = 'Hello  World From Pure JavaScript...❤❤❤';
document.getElementById('root').appendChild(h4);
