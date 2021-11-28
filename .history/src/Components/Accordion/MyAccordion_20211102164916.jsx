import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


const MyAccordion = ({question, answer}) => {

    const [show, setShow] = useState(false);

    return (

        <>
        <article className="question">
            <header>
                <h4 className="question-title" onClick={()  => setShow(!show)}>{question}</h4>
                <button className="btn" onClick={()  => setShow(!show)}>
                    {show  ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </button>
            </header>
            { show && <p>{answer}</p>}
        </article>
        </>
    )
}

export default MyAccordion;