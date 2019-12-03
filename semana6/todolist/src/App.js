import React from 'react';
import './App.css';
import styled from 'styled-components';
import ListaAparecendo from './components/ListaAparecendo';
import Lista from './components/Lista';

const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  display:flex;
  justify-content: center;
  `;

const EstiloH1 = styled.h1`
  color: #DC143C;
`;

const EstiloLabel = styled.label`
  color: #DC143C;
`;

const EstiloPesquisar = styled.div`
  margin: 0;
`;

function App() {
  return (
    <div className="App">
      <MainContainer/>
      <EstiloH1> Lista de Tarefas </EstiloH1>
      <input
        type="text"
        value={this.state.lista}
        onChange={this.onChangeTarefa}
        placeholder="Insira sua tarefa"/> 
      <ListaAparecendo/>
      <br/> <br/>
      <EstiloPesquisar>
      <EstiloLabel> Pesquisar </EstiloLabel>   
      <select>
        <option> Nenhum </option>  
        <option> Pendentes </option>
        <option> Finalizadas </option>
      </select>  
      </EstiloPesquisar>
    </div>
  );
}

export default App;
