import React, { createContext } from 'react';
import CompA from './CompA';

const FirstName = createContext();
const LastName = createContext();



const MainComp = () => {
    return (

        <>
            <br />
            <hr className="line"></hr>
            <h5 className="title">🔵 <u>Context API</u></h5><br /><br />
            <FirstName.Provider  value={'Alok'}> 
            <LastName.Provider value={'Jadhav'}>
            <CompA />
            </LastName.Provider>
            </FirstName.Provider>
        </>
    )
}

export default MainComp;
export {FirstName, LastName};