import React from "react";
import './index.css';

const RandomImgUrl = 'https://picsum.photos/2000';
const RandomImgUrl1 = 'https://picsum.photos/900';
const RandomImgUrl2 = 'https://picsum.photos/800';

function RandomImages() {
  return (
    <>
      <h5 className="title">🔵 <u>JSX Attributes for random image</u> -</h5><br />
      <div className="img_div">
        <img src={RandomImgUrl} alt='random image1' />
        <img src={RandomImgUrl1} alt='random image2' />
        <img src={RandomImgUrl2} alt='random image3' />
      </div>
      <br/>
      <hr className="line"></hr>
    </>
  );
}

export default RandomImages;
