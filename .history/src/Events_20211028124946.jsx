import React from 'react';

const Event = () => {

    const bgChange = () => {
        console.log('clicked');
    }
    return (
        <>
            <h3 className="title">🔵 <u>Events</u> -  Handling Events </h3><br /><br/>
            <div className="event">
                <button className="btn" onClick={bgChange}>Click Me 👆</button>
            </div>
        </>
    )
}

export default Event;