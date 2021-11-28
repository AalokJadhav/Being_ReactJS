import React, { useState } from 'react';
import { Questions } from './api';
import "./Accordion.css";

const Accordion = () => {

    const [ data, serdata] = useState(Questions);

    return (

        <>
            <br />
            <hr className="line"></hr>
            <h3 className="title">🔵 <u>Accordion</u> -  </h3><br /><br />
            {
            data.map((currElement) => {
                return currElement;
            })
        }
        </>

    )
}

export default Accordion;