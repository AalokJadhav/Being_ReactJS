import React, { useState } from 'react';
import { questions } from './api';
import "./Accordion.css";
import MyAccordion from './MyAccordion';

const Accordion = () => {

    const [ data, setData] = useState(questions);

    return (

        <>
            <br />
            <hr className="line"></hr>
            <h3 className="title">🔵 <u>Accordion</u> -  </h3><br /><br />
            {
            data.map((currElement) => {
                // console.log(currElement);
                const {id} = currElement;
                return <MyAccordion key={id} {...currElement}  />
            })
        }
        </>

    )
}

export default Accordion;