import React from "react";

function NetflixCard() {

    return (
        <>
            <h4>🔵 <u>Props & Array with Map Arrow Function</u> - Netflix Card</h4><br />
            <h1 className="heading_style" >Netflix Favorite  Series</h1>
            {Sdata.map((val) => {
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