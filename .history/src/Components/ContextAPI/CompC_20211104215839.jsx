import React from 'react';
import {FirstName} from './MainComp';

const CompC = () => {
    return (

        <> 
        <FirstName.Consumer>{(fname) => {
            return   <h1>A</h1>
        }}</FirstName.Consumer>
        </>
    );
}

export default CompC;