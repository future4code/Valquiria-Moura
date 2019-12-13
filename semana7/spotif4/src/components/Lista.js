import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ListaPlaylists from './ListaPlaylists';
import ListaMusicas from './ListaMusicas';

const EstiloDiv = styled.div`
background-color: rgb(30,215,96);
padding: 5px;
width: 250px;
min-height: 100px;
display: flex;
flex-direction: column;
align-items: center;
`;

const EstiloH4 = styled.h4`
color: white;
margin-top: 0;
`;

const baseURL = 'https://us-central1-spotif4.cloudfunctions.net/api'

class Lista extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todasPlaylists: [],
            tela:"lista"
        };
    }
    componentDidMount(){
        this.getTodasPlaylists();
    }
    getTodasPlaylists = async () => {
        const axiosConfig = {
            headers: {
                "auth": "val"
            }
        }; 
        try {    
        const response = await axios.get(
            `${baseURL}/playlists/getAllPlaylists`,
            axiosConfig
        );
        this.setState({todasPlaylists:response.data.result.list});
        } catch (error) {
            console.log (error.message);
        }
    };

    escolheTela = () => {
        if (this.state.tela === "lista") {
            this.setState({tela:"musicas"});
        } else {
            this.setState({tela:"lista"})
        }
    }

render () {
    const tipoBotao = this.state.tela === "lista"
    ? "Detalhes"
    : "Voltar para Playlists";
    return (
        <EstiloDiv>
            <EstiloH4> Suas Playlists </EstiloH4>
            {this.state.todasPlaylists.map(playlist => (
                <ListaPlaylists playlist={playlist}
                deletarPlaylist={this.getTodasPlaylists} />
            ))}
            {this.state.tela === "lista"
                ? <Lista/>
                : <ListaMusicas/>}
        <button onClick={this.escolheTela}> {tipoBotao} </button>
        </EstiloDiv>
        );
    }
}

export default Lista;