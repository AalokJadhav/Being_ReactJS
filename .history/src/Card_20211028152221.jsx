import React from "react";
import Images from "./CardImages";
import NcardHeading from "./NcardHeading";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <Images imgsrc={props.imgsrc} />
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <NcardHeading sname={props.Sname} />
            <a href={props.link} target="_blank" rel="noreferrer">
              <button className="btn">Watch Now</button>
            </a>
          </div>
        </div>
      </div>
      <br/>
      <hr className="line"></hr>
    </>
  )
}

export default Card;