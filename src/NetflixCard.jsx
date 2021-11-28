import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import Title from "./Title";

function NetflixCard() {

    return (
        <>
                    <br/>
      <hr className="line"></hr>
            <h5 className="title">🔵 <u>Props & Array with Map Arrow Function</u> - Netflix Card</h5><br />
            <Title /><br />
            {/* <h1 className="heading_styleN" >Netflix Favorite  Series</h1> */}
            {Sdata.map((val, index) => {
                // console.log(index);
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