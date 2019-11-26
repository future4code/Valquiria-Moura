import React from "react";
import "./PageSection.css";

function PageSection(props) {
  return (
    <div className="PageSectionContainer">
      <header className="PageSectionHeader">
        <h2> {props.titulo} </h2>
      </header>
    </div>
  );
}

export default PageSection;
