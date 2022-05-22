import React from "react";
import "../Components/ComponentStyles.css";

function DescriptionCard({ img, name, rating, detail }) {
  return (
    <>
      <div className="ItemCardBody">
        <div className="placeImage">
          <img src={img} alt="GoaImage" />
        </div>
        <div className="tourDetails">
          <div className="name">
            <p>{name}</p>
          </div>

          <div className="features">
            <div className="ratings">
              ⭐<br />
              {rating}
            </div>
            <div className="time">
              🕒
              <br />
              Flexible
            </div>
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>{detail}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DescriptionCard;
