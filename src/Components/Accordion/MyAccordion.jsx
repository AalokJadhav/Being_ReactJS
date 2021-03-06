import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


const MyAccordion = ({ question, answer }) => {

    const [show, setShow] = useState(false);

    return (

        <>
            <article className="question">
                <header>
                    <button className="Accordion_btn" onClick={() => setShow(!show)}>
                        {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>&nbsp;&nbsp;
                    <h5 className="question-title" onClick={() => setShow(!show)}>{question}</h5>
                </header>
                {show && <p>{answer}</p>}
            </article>
        </>
    )
}

export default MyAccordion;