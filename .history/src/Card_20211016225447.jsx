import react from "react";


function Card(Props) {
    return (
      <>
        <div className="cards">
          <div className="card">
            <img src={Props.imgsrc} alt="friends" className="card__img"  style={{ width: '300%', height: '500%' }} />
            <div className="card__info">
              <span className="card__category">{Props.title}</span>
              <h3 className="card__title">{Props.Sname}</h3>
              <a href={Props.link} target="_blank">
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default Card;