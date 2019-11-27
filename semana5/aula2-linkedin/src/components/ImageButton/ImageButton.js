import React from "react";
import "./ImageButton.css";

function ImageButton(props) {
  return (
      <div className="ImageButtonContainer">
        <p> {props.botao} </p>
      </div>
      
    
  );
}

export default ImageButton;