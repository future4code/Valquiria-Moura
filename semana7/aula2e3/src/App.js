import React from 'react';
import Cadastro from './components/Cadastro';
import Lista from './components/Lista';
import styled from 'styled-components';

const ParaAcertarBotao = styled.div`
display: flex;
flex-direction: column;
margin: 5px;
align-items: center;
`;

const EstiloBotao  = styled.button`
background-color: orange;
color: white;
width: 150px;
`;

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      tela: "cadastro"
    };
  }

  checagem = () => {
    if (this.state.tela === "cadastro") {
      this.setState({tela: "lista"});
    } else {
      this.setState({tela: "cadastro"});
    }
  };

  render() {
    const tipoBotao = this.state.tela === "cadastro" ? "Ir para Lista" : "Ir para Cadastro";
  
    return (
    <ParaAcertarBotao>
      
      {this.state.tela === "cadastro" ? <Cadastro/> : <Lista/>}
      <EstiloBotao onClick={this.checagem}>{tipoBotao}</EstiloBotao>
    </ParaAcertarBotao>
  );
}
}

export default App;
