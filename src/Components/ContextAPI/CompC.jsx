import React from 'react';
import { FirstName, LastName } from './MainComp';

const CompC = () => {
    return (

        <>
            <div className="content">
                <FirstName.Consumer>
                    {(fname) => {
                        return (
                            <LastName.Consumer>
                                {(lname) => {
                                    return (
                                        <h1>Using ContextAPI - My Name is {fname} {lname}</h1>
                                    );
                                }}
                            </LastName.Consumer>
                        );
                    }}
                </FirstName.Consumer>
            </div>
        </>
    );
}

export default CompC;