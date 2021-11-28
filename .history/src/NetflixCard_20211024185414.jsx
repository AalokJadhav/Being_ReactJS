import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import Title from "./Title";
import IfElse from "./IfElse";

function NetflixCard() {

    return (
        <>
            <h3 className="title">🔵 <u>Props & Array with Map Arrow Function</u> - Netflix Card</h3><br />
            <Title /><br />
            {/* <h1 className="heading_styleN" >Netflix Favorite  Series</h1> */}
            {Sdata.map((val, index) => {
                console.log(index);
                return (
                    <Card
                        key={val.id}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        sname={val.sname}
                        link={val.link} />
                )
            })
            }
            <br /><br />
            <IfElse /><br /><br /><br />

        </>
    )
}

export default NetflixCard;