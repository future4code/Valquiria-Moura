import React from "react";
import "./BigCard.css";

function BigCard(props) {
  return (
      <div className="BigCardContainer">
        <h3> {props.subtitulo} </h3>
        <p> {props.descricao} </p>
      </div>
      
    
  );
}

export default BigCard;