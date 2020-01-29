import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
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

const CriarViagem = props => {
    return (
      <MainContainer>
        <Logo src={logo} alt="FutureX - logo"/>
        <h1>Criar Viagem</h1>
        <Button variant="contained" onClick={props.voltar}>
          Voltar
        </Button>
      </MainContainer>
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