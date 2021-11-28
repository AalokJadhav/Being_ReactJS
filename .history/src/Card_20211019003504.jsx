import React from "react";
import Images from "./CardImages";
import CardHeading from "./NcardHeading";

function Card(props) {
    return (
      <>
        <div className="cards">
          <div className="card">
            <Images  imgsrc={props.imgsrc}/>
            <div className="card__info">
              <span className="card__category">{props.title}</span>
              <CardHeading title={props.Sname} />
              <a href={props.link} target="_blank" rel="noreferrer">
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default Card;