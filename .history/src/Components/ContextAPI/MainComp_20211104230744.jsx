import React, { createContext } from 'react';
import CompA from './CompA';

const FirstName = createContext();
const LastName = createContext();



const MainComp = () => {
    return (

        <>
            <br />
            <hr className="line"></hr>
            <h5 className="title">🔵 React Hook<u>- Context API</u></h5><br /><br />
            <FirstName.Provider  value={'Alok'}> 
            <LastName.Provider value={'Jadhav'}>
            <CompA />
            </LastName.Provider>
            </FirstName.Provider>
            <br/>
            <h6>Using useContext hooks (see useContext way in code)</h6>
        </>
    )
}

export default MainComp;
export {FirstName, LastName};