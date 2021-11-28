import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <br />
            <hr className="line"></hr>
            <h5 className="title">🔵<u>React Router</u>- react-router-dom </h5><br /><br />
            <h6>Difference between Render and Component Props (see codes)</h6>
            <div className="menu_style">
                <NavLink exact={"true"} activeclassname="active_class" to="/"> About US </NavLink>&nbsp;&nbsp;                <NavLink exact activeClassName="active_classs" to="/"> About US </NavLink>&nbsp;&nbsp;
                <NavLink exact={"true"} activeclassname="active_class" to="/service"> Services </NavLink>&nbsp;&nbsp;               <NavLink exact activeClassName="active_classs" to="/"> About US </NavLink>&nbsp;&nbsp;
                <NavLink exact={"true"} activeclassname="active_class" to="/contact"> Contact US </NavLink>
                <NavLink exact={"true"} activeclassname="active_class" to="/user"> User </NavLink>
                <NavLink exact={"true"} activeclassname="active_class" to="/search"> Search </NavLink>
                </div>
            </>

    )
}

export default Menu;