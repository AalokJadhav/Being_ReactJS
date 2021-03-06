import React from "react";
import Images from "./CardImages";
import NcardHeading from "./NcardHeading";

function Card(props) {
  return (
    <>
      <div className="cards1">
        <div className="card1">
          <Images imgsrc={props.imgsrc} />
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <NcardHeading sname={props.Sname} />
            <a href={props.link} target="_blank" rel="noreferrer">
              <button className="btn1">Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;