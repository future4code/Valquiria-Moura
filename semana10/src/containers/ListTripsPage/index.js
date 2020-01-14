import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

const ListTripsPage = props => {
    return (
      <div>
        <h1>Lista de Viagens</h1>
        <button onClick={props.criarViagem}>Criar Viagem</button>
        <button onClick={props.listaInscricoes}>Lista de Inscrições</button>
        <button onClick={props.voltar}>Voltar</button>
      </div>
    );
  };
  
  function mapDispatchToProps(dispatch) {
    return {
        voltar: () => dispatch(push(routes.login)),
        criarViagem: () => dispatch(push(routes.criarviagem)),
        listaInscricoes: () => dispatch(push(routes.listainscricoes))
    };
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(ListTripsPage);
  