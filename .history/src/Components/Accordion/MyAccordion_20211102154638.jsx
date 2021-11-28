import React from 'react';


const MyAccordion = ({questions, answer}) => {
    return (

        <>
            <h1> {questions}</h1>
            <h5>{answer}</h5>
        </>
    )
}

export default MyAccordion;