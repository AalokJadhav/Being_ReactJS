import React from 'react';
import { FirstName } from './MainComp';

const CompC = () => {
    return (

        <>
            <FirstName.Consumer>
                {(fname) => {
                    return <h1>My Name is Alok Jadhav</h1>
                }}
            </FirstName.Consumer>
        </>
    );
}

export default CompC;