import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import Title from "./Title";

function NetflixCard() {

    return (
        <>
            <h4>🔵 <u>Props & Array with Map Arrow Function</u> - Netflix Card</h4><br />
            <Title /><br />
            <div className="heading_styleAb">
            <img className="primelogo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Amazon_Prime_Video_logo.svg/800px-Amazon_Prime_Video_logo.svg.png'></img> 
            </div>

            <div className="heading_styleNb">
            <img className="netflixlogo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png'></img>            </div>
            
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