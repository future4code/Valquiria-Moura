import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getCandidatos } from "../actions/inscricoes";
import logo from "../imagens/logo.jpg";
import Button from '@material-ui/core/Button';
import styled from "styled-components";

const MainContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10px;
background-color: white;
width: 99%;
height: 99%;
`;

const Logo = styled.img`
width: 300px;
`;

const DivListaInscricoes = styled.div`
width: 90%;
display: flex;
margin: 15px;
`;

const DivInscricao = styled.div`
width: 90%;
margin-top: 20px;
margin: 10px;
border: 1px solid grey;
padding: 10px;
`;

const DivViagem = styled.div`
width: 90%;
margin-top: 20px;
margin: 10px;
border: 1px solid grey;
padding: 10px;
`;

class ListaInscricoes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount(dispatch){
    this.props.getTrip()
  }

  render() {
    const {viagens} = this.props;
    return (
      <MainContainer>
        <Logo src={logo} alt="FutureX - logo"/>
        <h1>Lista de Inscrições</h1>
        <DivListaInscricoes>
        {/* {inscricoes.map((candidates) => 
          <DivInscricao>
            <h4>{candidates.name}</h4>
            <p>{candidates.age}</p>
            <p>{candidates.country}</p>
            <p>{candidates.profession}</p>
            <p>{candidates.applicationText}</p>
            <Button variant="contained">
              Aprovar
            </Button>
            <Button variant="contained">
              Reprovar
            </Button>
          </DivInscricao>  
        )} */}
        
            
                
        </DivListaInscricoes>  
        <Button variant="contained" onClick={this.props.voltar}>
          Voltar
        </Button>
        
      </MainContainer>
    );
  }

}

const mapStateToProps = state => {
  return {
    inscricoes: state.inscricoes.todasAsInscricoes,
    viagens: state.viagens.todasAsViagens
  }
};

const mapDispatchToProps = dispatch => {
    return {
        voltar: () => dispatch(push(routes.listaviagens)),
        getTrip: (tripId) => dispatch(getCandidatos(tripId)),
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListaInscricoes);