import React, { createContext } from 'react';
import CompA from './CompA';

const MainComp = () => {

    const FirstName = createContext();
    return (

        <>
            <br />
            <hr className="line"></hr>
            <h5 className="title">🔵 <u>Context API</u></h5><br /><br />
            <FirstName.Provider  value={'Alok'}> 
            <CompA />
            </FirstName.Provider>
        </>
    )
}

export default MainComp;