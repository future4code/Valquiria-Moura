import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

const CriarViagem = props => {
    return (
      <div>
        <h1>Criar Viagem</h1>
        <button onClick={props.voltar}>Voltar</button>
      </div>
    );
  };
  
  function mapDispatchToProps(dispatch) {
    return {
        voltar: () => dispatch(push(routes.listaviagens)),
    };
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(CriarViagem);