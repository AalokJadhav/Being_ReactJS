import React from 'react';

// Method 1
const FullName = ['Alok' , 'Jadhav'];
const BioData = [1., ...FullName, 'Male', 9876543210];
console.log('FullName', FullName);
console.log('BioData',BioData);

// Method 2
const Netflix = ['FRIENDS' , 'Dark', 'Stranger Things'];
const Amazon = ['Mirzapur' , 'The Family Man', 'Paatal Lok'];

var Series = [...Netflix, ...Amazon];
console.log('All Series', Series);

const SpreadOpertor = () => {
    return (
        <>
             <br />
            <hr className="line"></hr>
            <h3 className="title">🔵 <u>Spread / Rest Operator</u> -  4 Ways (See Console)</h3><br /><br />
            <div className="content">
            <h5>
            Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places
            where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object
            expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
            </h5>
            </div>
        </>
    )
}

export default SpreadOpertor;