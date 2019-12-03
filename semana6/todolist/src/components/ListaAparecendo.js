import React from 'react';
import Lista from './Lista';
import styled from 'styled-components';

const DivBotao = styled.div`
  display:flex;
  justify-content:center;
  margin-top: 3%;
  `;

class ListaAparecendo extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        listaAparecendo: false,
        lista: []
      }
    }
  
  onclickAdicionarTarefa = () => {
    const novaLista = [...this.state.lista]
    novaLista.push(this.state.lista)
    this.setState({listaAparecendo: !this.state.listaAparecendo})
    this.setState({lista: novaLista})
  };
  
  render() {
    const listadeTarefas = this.state.lista.map((item))
    return <li>{item}</li>
  };

    return (
      <div>
        <DivBotao>
        <button onClick={this.onclickAdicionarTarefa}> 
        Adicionar tarefa 
        </button>
        </DivBotao>
        {this.state.listaAparecendo && listadeTarefas}
      </div>
    );
  }

export default ListaAparecendo;