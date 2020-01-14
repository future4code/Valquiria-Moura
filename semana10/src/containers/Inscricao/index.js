import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

const Inscricao = (props) => {
    return (
        <div> 
            <h1> Inscrições </h1> 
            <button onClick={props.voltar}> Voltar </button>
        </div>
    )
}

function mapDispatchToProps (dispatch) {
    return {
        voltar: () => dispatch(push(routes.root)),
    }
}

export default connect(
    null,
    mapDispatchToProps
  )(Inscricao);