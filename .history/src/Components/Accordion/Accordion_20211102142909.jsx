import React, { useState } from 'react';
import { Questions } from './api';
import "./Accordion.css";
import MyAccordion from './MyAccordion';

const Accordion = () => {

    const [ data, serdata] = useState(Questions);

    return (

        <>
            <br />
            <hr className="line"></hr>
            <h3 className="title">🔵 <u>Accordion</u> -  </h3><br /><br />
            {
            data.map((currElement) => {
                const {id, Questions, answer} = currElement
                return <MyAccordion key={id} {...currElement} />
            })
        }
        </>

    )
}

export default Accordion;