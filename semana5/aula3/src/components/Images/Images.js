import React from "react";
import "./Images.css";

class Images extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <img id="imagem" alt="Meme" src={this.props.imagem}/>
            </div>
        )
    }
}

export default Images;