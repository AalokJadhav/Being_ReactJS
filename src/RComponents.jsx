import React from 'react';
import GoogleFont from './GoogleFont';
import Title from './Title';

function RComponents() {
    return (
        <>
            <h5 className="title">🔵 <u>React Components</u> - Seprate Piece of code into Components (use Title & GoolgleFont Components) </h5><br />
            <Title />
      <hr className="line"></hr>
            <GoogleFont />
            </>
    )
}

export default RComponents;