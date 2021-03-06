import React, { useState } from 'react';
import { questions } from './api';
import "./Accordion.css";
import MyAccordion from './MyAccordion';

const Accordion = () => {

    const [ data] = useState(questions);

    return (

        <>
            <br />
            <hr className="line"></hr>
            <h5 className="title">🔵 <u>Accordion</u> -  </h5><br /><br />
            <main>
            <div className="accordion-div">
                <h3 className="accordion-heading">React Interview Questions</h3>
                <section className="info">
            {
            data.map((currElement) => {
                // console.log(currElement);
                const {id} = currElement;
                // console.log(id);
                return <MyAccordion key={id} {...currElement}/>
            })
        }
        </section>
            </div>
            </main>
        </>

    )
}

export default Accordion;