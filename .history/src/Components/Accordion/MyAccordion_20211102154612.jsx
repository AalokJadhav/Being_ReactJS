import React from 'react';


const MyAccordion = ({questions, answer}) => {
    return (

        <>
            <h1> {questions}</h1>
            <h1>{answer}</h1>
        </>
    )
}

export default MyAccordion;