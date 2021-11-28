import React from 'react';

const SResult = (props) => {

    const image = `https://source.unsplash.com/600x300/?${props.name}`;

    return (
        <>
        <div className="container">
            <img  src={image} alt="random" />
            </div>
        </>
    )
}

export default SResult;