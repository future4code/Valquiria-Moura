import React from 'react';
import styled from 'styled-components';

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
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const InputStyle = styled.input`
  width: 340px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const DivButtons = styled.div`
  width: 345px;
  display: flex;
  justify-content: space-between;
  padding: 2px;
  margin-bottom: 5px;
`;

const ButtonStyle = styled.button`
  width: 82px;
  height: 35px;
  background-color: #957D95;
  border: 1px solid #957D95;
  color: white;
`;

const FooterStyle = styled.footer`
  width: 340px;
  display: flex;
  justify-content: flex-end;
  padding: 2px;
`;

function App() {
  return (
    <MainContainer>
        <Titulo> 4Task </Titulo>
        <DivTarefas>
          <InputStyle 
            type="text"
            placeholder="O que tem que ser feito?"
          />
          <DivButtons>
            <ButtonStyle> Completar todas </ButtonStyle>
            <ButtonStyle> Todas </ButtonStyle>
            <ButtonStyle> Pendentes </ButtonStyle>
            <ButtonStyle> Completas </ButtonStyle>
          </DivButtons>
        </DivTarefas>
      <FooterStyle> 
        <h6> by Valquíria Moura </h6>
      </FooterStyle>
    </MainContainer>
    
  );
}

export default App;
