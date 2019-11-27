import React from "react";
import "./PageSection.css";

function PageSection(props) {
  return (
      <div className="PageSection">
        <p> {props.conta} </p>
      </div>
      
    
  );
}

export default PageSection;