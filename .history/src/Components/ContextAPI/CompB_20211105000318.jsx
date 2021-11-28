import React, { useContext } from 'react';
import CompC from './CompC';
import { FirstName, LastName } from './MainComp';


const CompB = () => {
    const fName = useContext(FirstName);

    return (

        <>
            <h1>My Name is Alok Jadhav</h1>
        </>
    );
}

export default CompB;