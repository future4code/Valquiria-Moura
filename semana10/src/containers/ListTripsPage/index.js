import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getTrips } from "../actions/viagens";

class ListTripsPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(dispatch){
    this.props.buscarViagens()
  }

    render() {
      const {criarViagem, listaInscricoes, voltar} = this.props;
    return (
      <div>
        <h1>Lista de Viagens</h1>

        <div>
          {this.props.viagens.map((viagem) =>
            <p>{viagem.id}</p>
          )}
        </div>

        <button onClick={criarViagem}>Criar Viagem</button>
        <button onClick={listaInscricoes}>Lista de Inscrições</button>
        <button onClick={voltar}>Voltar</button>

      </div>
    );
  };
}
  
  const mapStateToProps = state => {
    return {
      viagens: state.viagem.todasAsViagens
    }
  };

  const  mapDispatchToProps = dispatch => {
    return {
        voltar: () => dispatch(push(routes.login)),
        criarViagem: () => dispatch(push(routes.criarviagem)),
        listaInscricoes: () => dispatch(push(routes.listainscricoes)),
        buscarViagens: () => dispatch(getTrips()),
    }
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListTripsPage);
  