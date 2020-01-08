import React, { Component } from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import { criarTarefaAction } from '../actions/index';
import Button from '@material-ui/core/Button';

const DivTarefas = styled.div`
  background-color: #ECB8A5;
  width: 580px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const InputStyle = styled.input`
  width: 530px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const DivButtons = styled.div`
  width: 550px;
  padding: 2px;
  display: flex;
  justify-content: space-around;
`;

class InserirTarefas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inserirtarefa: ""
    };
  }

  onChangeTarefa = event => {
    this.setState({inserirtarefa: event.target.value});
  };

//   onCriarTarefa = () => {
//     this.props.createPost(this.state.postValue)
//   }

  render() {
    return (
        <DivTarefas>
        <InputStyle 
          type="text"
          placeholder="O que tem que ser feito?"
          onChange={this.onChangeTarefa}
          value={this.state.inserirtarefa}
        />
        <DivButtons>
          <Button variant="contained">
            Completar todas
          </Button>
          <Button variant="contained" >
            Todas
          </Button> 
          <Button variant="contained" >
            Pendentes
          </Button>
          <Button variant="contained" >
            Completas
          </Button> 
        </DivButtons>
      </DivTarefas>   
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  criarTarefa: (tarefa) => dispatch(criarTarefaAction(tarefa)),
})

export default connect(null, mapDispatchToProps) (InserirTarefas)
