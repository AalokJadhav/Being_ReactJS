import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

function NetflixCard() {

    return (
        <>
            <h4>🔵 <u>Props & Array with Map Arrow Function</u> - Netflix Card</h4><br />
            <h1 className="heading_styleN" >Netflix Favorite  Series</h1>
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
        </>
    )
}

export default NetflixCard;