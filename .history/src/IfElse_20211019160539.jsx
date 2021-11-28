import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";


const FavSeries = 'netflix';

function IfElse() {
    if (FavSeries === 'netflix') {
        return (
            <>
            <h4>🔵 <u>If Else Statement</u> - Netflix Card</h4><br />
            <h1 className="heading_styleA" >Amazon Originals <img className="primelogo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Amazon_Prime_Video_logo.svg/800px-Amazon_Prime_Video_logo.svg.png'></img> </h1>
            <Card
                key={Sdata[1].id}
                imgsrc={Sdata[1].imgsrc}
                title={Sdata[1].title}
                sname={Sdata[1].sname}
                link={Sdata[1].link} />
        </>
        )
    } else {
        <>
        <h1 className="heading_styleN" >A Netflix Originals <img className="primelogo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png'></img> </h1>
            <Card
                key={Sdata[1].id}
                imgsrc={Sdata[1].imgsrc}
                title={Sdata[1].title}
                sname={Sdata[1].sname}
                link={Sdata[1].link} />
                </>
    }
}

export default IfElse;
