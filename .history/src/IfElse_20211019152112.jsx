import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";


const FavSeries = 'netflix';

function IfElse () {
            if(FavSeries === 'netflix'){
    return (
        <Card
        key={Sdata[1].id}
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        link={Sdata[1].link} />
    )
            }
}

export default IfElse;