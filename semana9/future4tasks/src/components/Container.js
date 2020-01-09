import React, { Component } from "react";
import styled from "styled-components";
import InserirTarefas from "./InserirTarefas";
import ListaTarefas from "./ListaTarefas";

const MainContainer = styled.div`
  background-color: #ECCFC3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 5px;
`;

const Titulo = styled.h1`
  color: #904C77;
`;

class Container extends Component {
    render() {
        return (
            <MainContainer>
                <Titulo> 4Task </Titulo>
                <InserirTarefas/>
                <ListaTarefas/>
            </MainContainer>
        );
    }
}

export default Container;