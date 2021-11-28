import React, { useContext } from 'react';
import CompC from './CompC';
import { FirstName, LastName } from './MainComp';


const CompB = () => {
    const fName = useContext(FirstName);
    const lName = useContext(LastName);

    return (

        <>
        {/* <CompC /> */}
            <div className="content">
            <h1>My Name is {fName} {lName}</h1>
            </div>
        </>
    );
}

export default CompB;