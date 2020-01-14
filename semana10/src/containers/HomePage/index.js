import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

const HomePage = (props) => {
    return (
        <div> 
            <h1> Home Page </h1> 
            <button onClick={props.vaiParaLogin}> Ir para Login </button>
            <button onClick={props.vaiParaInscricao}> Inscriçôes </button>
        </div>
    )
}

function mapDispatchToProps (dispatch) {
    return {
        vaiParaLogin: () => dispatch(push(routes.login)),
        vaiParaInscricao: () => dispatch(push(routes.inscricao)),
    }
}

export default connect(
    null,
    mapDispatchToProps
  )(HomePage);