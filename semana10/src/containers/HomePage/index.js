import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import styled from "styled-components";
import logo from "../imagens/logo.jpg";
import Button from '@material-ui/core/Button';

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
width: 300px;
height: 100px;
display: flex;
align-items: center;
justify-content: space-evenly;
margin-top: 20px;
`;

const Logo = styled.img`
width: 300px;
`;

const HomePage = (props) => {
    return (
        <MainContainer> 
            <Logo src={logo} alt="FutureX - logo"/>
            <DivBotoes>
                <Button variant="contained" onClick={props.vaiParaInscricao}>
                    Inscrições
                </Button>
                <Button variant="contained" onClick={props.vaiParaLogin}>
                    Administrador
                </Button>                
            </DivBotoes>
        </MainContainer>
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