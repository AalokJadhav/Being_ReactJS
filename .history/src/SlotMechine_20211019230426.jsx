import React from "react";
import './App.css';

const SlotM = (props) => {

    let x = props.x;
    let y = props.y;
    let z = props.z;

    if ((x === y) && (y === z)) {
        return (
            <>
                <div className="slot_inner">
                    <h3>
                        {x} {y} {z}
                    </h3>
                    <h3> This is matching...😀</h3>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="slot_inner">
                    <h3>
                        {x} {y} {z}
                    </h3>
                    <h3> This is not matching...😓</h3>
                </div>
            </>
        )
    }
}

const SlotMachine = () => {
    return (
        <>
            <h4>🔵 <u>Slot Machine Game</u> - </h4><br />
            <h1 className="heading_style"> 🎰<span className="flash">Slot Machine Game</span>🎰</h1>
            <br/><br/><br/><br/>
            <div className="slotmachine">
                <SlotM x="😀" y="😀" z="😀" />
                <hr />
                <SlotM x="😀" y="🍌" z="🎈" />
                <hr />
                <SlotM x="🎪" y="🚗" z="❤" />
                <hr />
                <SlotM x="🩸" y="🩸" z="🩸" />
                <hr />
            </div>
        </>
    )
}

export default SlotMachine;