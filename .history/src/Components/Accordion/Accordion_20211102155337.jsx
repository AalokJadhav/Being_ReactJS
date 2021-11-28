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
            <section className="main-div">
                <h2>React Interview Questions</h2>
            {
            data.map((currElement) => {
                // console.log(currElement);
                const {id} = currElement;
                console.log(id);
                return <MyAccordion key={id} {...currElement}/>
            })
        }
            </section>
        </>

    )
}

export default Accordion;