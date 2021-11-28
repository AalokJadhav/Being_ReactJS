import React from "react";

const SlotM = () => {
    let x = '😍';
    let y = '😍';
    let z = '😍s';

    if ((x === y && y === z)) {
        return (
            <>
            <div className="slot_inner">
                <h1>
                    {x} {y} {z}
                </h1>
                <h1> This is matching...😀</h1>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div className="slot_inner">
                <h1>
                    {x} {y} {z}
                </h1>
                <h1> This is not matching...😓</h1>
            </div>
            </>
        )
    }
}

const SlotMachine = () => {
    return (
        <>
         <h4>🔵 <u>Slot Machine Game</u> - </h4><br />
        <h1>Welcome to 🎰<span className="flash">Slot Machine Game</span>🎰</h1>
        <SlotM  />
        </>
    )
}

export default SlotMachine;