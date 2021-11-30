import React, { useState } from 'react';

const Event = () => {

    const purple = '#8e44ad';
    const [bg, setbg] = useState(purple);
    const [name, setName] = useState('Click Me 👆');

    const bgChange = () => {
        // console.log('clicked');
        let newbg = '#34495e';
        setbg(newbg);
        setName('Double Click');
    }

    const bgBack = () => {
        setbg(purple);
        setName('Thank You 🙂');
    }
    return (
        <>
              <hr className="line"></hr>      
            <h5 className="title">🔵 <u>Events</u> -  Handling Events </h5><br /><br />
            <div className="event" style={{ backgroundColor: bg }}>
                <button className="btn1" onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
            </div>
            <br/>
        </>
    )
}

export default Event;