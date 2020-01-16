import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getTrips } from "../actions/viagens";
import styled from "styled-components";
import logo from "../imagens/logo.jpg";
import Button from '@material-ui/core/Button';
import {setViagemSelecionada} from "../actions/inscricoes";

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

const DivBotoes = styled.div`
width: 500px;
height: 100px;
display: flex;
align-items: center;
justify-content: space-evenly;
margin-top: 20px;
`;

const Logo = styled.img`
width: 300px;
`;

const DivListaViagens = styled.div`
width: 90%;
display: flex;
margin: 15px;
`;

const DivViagem = styled.div`
width: 90%;
margin-top: 20px;
margin: 10px;
border: 1px solid grey;
padding: 10px;
`;

class ListTripsPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  handleIrParaDetalhesDaViagem = (idDeViagem) => {
    this.props.buscarCandidatos(idDeViagem)
    this.props.irParaListaInscricoes()
  }


  componentDidMount(){
    this.props.buscarViagens()
  }

    render() {
      const {criarViagem, irParaListaInscricoes, voltar, viagens} = this.props;
    return (
      <MainContainer> 
            <Logo src={logo} alt="FutureX - logo"/>
            <h1>Lista de Viagens</h1>
            <DivListaViagens>
              {viagens.map((viagem) => 
                <DivViagem>
                  <h4>{viagem.name}</h4>
                  <p>Planeta: {viagem.planet}</p>
                  <p>Data: {viagem.date}</p>
                  <p>Descrição: {viagem.description}</p>
                  <p>Duração: {viagem.durationInDays} dias</p>
                  <Button variant="contained" onClick={() => this.handleIrParaDetalhesDaViagem(viagem.id) }>
                    Ver inscritos
                </Button>
                </DivViagem>
               )}
              
            </DivListaViagens>
            <DivBotoes>

                <Button variant="contained" onClick={criarViagem}>
                    Criar Viagem
                </Button>

                <Button variant="contained" onClick={irParaListaInscricoes}>
                    Lista de Inscrições
                </Button>

                <Button variant="contained" onClick={voltar}>
                    Voltar
                </Button>

            </DivBotoes>
        </MainContainer>
    );
  };
}
  
  const mapStateToProps = state => {
    return {
      viagens: state.viagens.todasAsViagens
    }
  };

  const  mapDispatchToProps = dispatch => {
    return {
        voltar: () => dispatch(push(routes.login)),
        criarViagem: () => dispatch(push(routes.criarviagem)),
        irParaListaInscricoes: () => dispatch(push(routes.listainscricoes)),
        buscarViagens: () => dispatch(getTrips()),
        buscarCandidatos: (idDeViagem) => dispatch(setViagemSelecionada(idDeViagem)),
    }
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListTripsPage);
  