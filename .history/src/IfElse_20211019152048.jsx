import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";


const FavSeries = 'netflix';

function IfElse () {
            if(FavSeries === 'netflix'){
    return (
        <Card
        key={Sdata.id}
        imgsrc={Sdata.imgsrc}
        title={Sdata.title}
        sname={Sdata.sname}
        link={Sdata.link} />
    )
            }
}

export default IfElse;