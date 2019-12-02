import React from 'react';
import './App.css';
import styled from 'styled-components';
import Basico from './Basico/Basico';
import Etapa2 from './Basico/Etapa2';
import Etapa3 from './Basico/Etapa3';

function App () {  
  return (
    <div className="App">
        <MainContainer>
        <EstiloDiv>
        <Botoes/>
        </EstiloDiv>
        </MainContainer>
    </div>
  );
} 

const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  display:flex;
  justify-content: center;
  height: 65vh;
`;

const EstiloDiv = styled.div`
  border: 1px solid black;
  margin: 1%;
  width: 384px;
  height: 100%;

`;
let tela;

class Botoes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tela: "basico",
    };
  }

  onClickEtapa2 = () => {
    this.setState({ tela: "etapa2" });
  };

  onClickEtapa3 = () => {
    this.setState({ tela: "etapa3" });
  };

  onClickEtapaFinal = () => {
    this.setState({ tela: "etapafinal" });
  };

  render() {
    if (this.state.tela === "basico") {
      tela = (
        <div>
          <Basico/>
          <button onClick={this.onClickEtapa2}>Próxima Etapa</button>
        </div>
      );
    } else if (this.state.tela === "etapa2") {
      tela = (
          <div>
          <Etapa2/>
          <button onClick={this.onClickEtapa3}>Próxima Etapa</button>
        </div>
      );
    } else if (this.state.tela === "etapa3") {
      tela = (
        <div>
          <Etapa3/>
          <button onClick={this.onClickEtapaFinal}>Próxima Etapa</button>
        </div>
      );
    } else {
        tela = (  
          <div>
          <h2> O FORMULÁRIO ACABOU </h2>
          <h3> Muito obrigado por participar! </h3>
          <h3>  Entraremos em contato! </h3>
          </div>
        );
    }
  return (
    <div>
      {tela}
    </div>
  );
    
}
}

export default App;



  

  