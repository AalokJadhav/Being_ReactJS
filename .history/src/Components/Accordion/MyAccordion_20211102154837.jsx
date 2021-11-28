import React from 'react';


const MyAccordion = ({question, answer}) => {
    return (

        <>
            <h3> {question}</h3>
            <h6>{answer}</h6>
        </>
    )
}

export default MyAccordion;