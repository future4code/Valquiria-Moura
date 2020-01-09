import React from 'react';
import styled from 'styled-components';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Container from "./components/Container";
import InserirTarefas from "./components/InserirTarefas";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

const FooterStyle = styled.footer`
  width: 530px;
  display: flex;
  justify-content: flex-end;
  padding: 2px;
`;

function App() {
  return (
    <Provider store={store}>
      <Container/>
      <InserirTarefas/>
        <FooterStyle> 
          <h6> by Valquíria Moura </h6>
        </FooterStyle>
    </Provider>
  );
}

// const mapStateToProps = state => {
//   return {
//     listaTarefas: state.tarefas.listaTarefas
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     listaTarefas: novaTarefa => dispatch(listaTarefasAction(tarefas))
//   };
// };

export default App;