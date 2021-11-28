import React from 'react';


const MyAccordion = ({question, answer}) => {
    return (

        <>
            <h1> {question}</h1>
            <h5>{answer}</h5>
        </>
    )
}

export default MyAccordion;