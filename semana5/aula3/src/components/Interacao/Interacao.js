import React from "react";
import "./Interacao.css";

class Interacao extends React.Component {
    constructor(props) {
        super(props);
           }

   

    render(){

        return (
            <div className="interacoes">
                    <img 
                        className="icones" 
                        alt="Interação" 
                        src={this.props.like}/>
                <p> 0 </p>
            </div>
        )
    }
}

export default Interacao;

