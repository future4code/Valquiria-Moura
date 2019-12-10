import React from 'react';
import './App.css';
import styled from 'styled-components';

const MainContainer = styled.div`
  margin: 5%;
  padding: 0;
  display:flex;
  justify-content: center;
  height: 65vh;
`;

const EstiloDiv = styled.div`
  border: 1px solid black;
  margin: 1%;
  padding: 1%;
  width: 280px;
  height: 252px;
`;

function App() {
  return (
    <div className="App">
      <MainContainer>
        <EstiloDiv>
        <label for="nome">
            Nome:
        </label> <br/><br/>
        <input 
            type="text"
            name="nome"
            id="nome"/> <br/><br/>
        <label for="email">
            E-mail:
        </label> <br/><br/>
        <input 
            type="text"
            name="email"
            id="email"/> <br/><br/>
        <button> Salvar </button> <br/> <br/>
        <button> Ir para a página de lista </button> <br/>
        </EstiloDiv>
        </MainContainer>
    </div>
  );
}

export default App;
