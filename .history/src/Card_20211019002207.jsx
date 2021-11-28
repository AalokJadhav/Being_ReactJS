import React from "react";
import Images from "./CardImages";
import CardHeading from "./NcardHeading";

function Card(Props) {
    return (
      <>
        <div className="cards">
          <div className="card">
            <Images  imgsrc={Props.imgsrc}/>
            <div className="card__info">
              <span className="card__category">{Props.title}</span>
              <CardHeading />
              <a href={Props.link} target="_blank" rel="noreferrer">
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default Card;