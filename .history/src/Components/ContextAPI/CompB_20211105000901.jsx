import React, { useContext } from 'react';
import CompC from './CompC';
import { FirstName, LastName } from './MainComp';


const CompB = () => {
    const fName = useContext(FirstName);
    const lName = useContext(LastName);

    return (

        <>
            <div className="content">
            <CompC />
            <h1> UsinguseContext - My Name is {fName} {lName}</h1>
            </div>
        </>
    );
}

export default CompB;