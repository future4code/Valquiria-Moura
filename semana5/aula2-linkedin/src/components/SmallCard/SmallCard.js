import React from "react";
import "./SmallCard.css";

function SmallCard(props) {
  return (
      <div className="SmallCardContainer">
        <p> {props.infos} </p>
      </div>
      
    
  );
}

export default SmallCard;