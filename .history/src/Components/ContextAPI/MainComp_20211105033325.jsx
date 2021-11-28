import React, { createContext } from 'react';
import CompA from './CompA';

const FirstName = createContext();
const LastName = createContext();



const MainComp = () => {
    return (

        <>
            <br />
            <hr className="line"></hr>
            <h5 className="title">🔵<u>React Hook</u>- Context API and useContext</h5><br /><br />
            <FirstName.Provider  value={'Alok'}> 
            <LastName.Provider value={'Jadhav'}>
            <CompA />
            </LastName.Provider>
            </FirstName.Provider>
            <br/>
            <div className="content">
            <h6>Using useContext hooks (see useContext way in CompB )</h6>
            </div>
        </>
    )
}

export default MainComp;
export {FirstName, LastName};