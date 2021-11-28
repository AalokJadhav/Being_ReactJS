import React, { useState } from 'react';

const Event = () => {

    const purple = '#8e44ad';
    const [bg, setbg] = useState(purple);
    const bgChange = () => {
        // console.log('clicked');
        let newbg = '#34495e';
        setbg(newbg);
    }
    return (
        <>
            <h3 className="title">🔵 <u>Events</u> -  Handling Events </h3><br /><br/>
            <div className="event" style={{backgroundColor: bg}}>
                <button className="btn" onClick={bgChange}>Click Me 👆</button>
            </div>
        </>
    )
}

export default Event;