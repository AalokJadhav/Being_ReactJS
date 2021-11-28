import React from 'react';
import { NavLink } from 'react-router-dom';


const Error = () => {
    return (
        <>
        <div className="container">
            <h1> 404 Error Page </h1>
            <h2>OOps..! Page Not Found..Go to Home Page.</h2>
             <NavLink to="/"> Go Back 🔙 </NavLink>
             
            </div>
        </>
    )
}

export default Error;