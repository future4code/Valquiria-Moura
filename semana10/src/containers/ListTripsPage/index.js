import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

const ListTripsPage = props => {
    return (
      <div>
        <div>Lista Viagens</div>
        <button onClick={props.voltar}>Voltar</button>
      </div>
    );
  };
  
  function mapDispatchToProps(dispatch) {
    return {
        voltar: () => dispatch(push("/"))
    };
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(ListTripsPage);
  