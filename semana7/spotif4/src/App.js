import React from 'react';
import NovaPlaylist from './components/NovaPlaylist';
import styled from 'styled-components';
import logo from './components/logo.jpg';
import Lista from './components/Lista';

const MainContainer = styled.div`
padding: 0;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const EstiloDiv = styled.div`
background-color: rgb(30,215,96);
padding: 5px;
width: 250px;
height: 25px;
display: flex;
flex-direction: column;
align-items: center;
`;

const EstiloLogo = styled.img`
width: 300px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tela: "novaPlaylist"
    };
  }

  escolheTela = () => {
    if (this.state.tela === "novaPlaylist") {
      this.setState({tela:"lista"});
    } else {
      this.setState({tela:"novaPlaylist"});
    }
  };

  render() {
    const tipoBotao = this.state.tela === "novaPlaylist" 
    ? "Ver suas Playlists"
    : "Criar nova Playlist"; 
    return (
      <MainContainer>
        <EstiloLogo src={logo} alt="Logo Spotif4"/>
        {this.state.tela === "novaPlaylist"
        ? <NovaPlaylist/>
        : <Lista/>}
        <EstiloDiv>
        <button onClick={this.escolheTela}> {tipoBotao} </button>
        </EstiloDiv>
        <footer>
          <p>By Valquíria Moura </p>
        </footer>
      </MainContainer>
      );
    }
  }
  

export default App;
