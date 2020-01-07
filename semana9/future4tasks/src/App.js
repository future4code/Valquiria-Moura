import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {createStore} from "redux";
import rootReducer from "../src/reducers/index";

const store = createStore(rootReducer);

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

const FooterStyle = styled.footer`
  width: 530px;
  display: flex;
  justify-content: flex-end;
  padding: 2px;
`;

function App() {
  return (
    <Provider store={store}>
      <MainContainer>
        <Titulo> 4Task </Titulo>
          <DivTarefas>
            <InputStyle 
              type="text"
              placeholder="O que tem que ser feito?"
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
        <FooterStyle> 
          <h6> by Valquíria Moura </h6>
        </FooterStyle>
      </MainContainer>
    </Provider>, documentgetElementById("root")
  );
}

const mapStateToProps = state => {
  return {
    listaTarefas: state.tarefas.listaTarefas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listaTarefas: novaTarefa => dispatch(listaTarefasAction(tarefas))
  };
};

export default connect(
  null,
  mapDispatchToProps)
  (App);
);
