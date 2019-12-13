import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const EstiloDiv = styled.div`
background-color: rgb(30,215,96);
padding: 5px;
width: 250px;
height: 180px;
display: flex;
flex-direction: column;
align-items: center;
`;

const EstiloLabel = styled.label`
color: white;
margin-bottom: 10px;
`;

const EstiloInput = styled.input`
margin-bottom: 10px;
`;

const baseURL = 'https://us-central1-spotif4.cloudfunctions.net/api'

class NovaPlaylist extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }

    eventoPlaylist = event => {
        this.setState({name: event.target.value});
    };

    criandoPlaylist = async () => {
        const paraCriarPlaylist = {
            name: this.state.name,
            id: this.state.id
        };

        const axiosConfig = {
            headers: {
                "auth": "val"
            }
        };

        await axios.post (
            `${baseURL}/playlists/createPlaylist`,
            paraCriarPlaylist,
            axiosConfig
        );
        this.setState({name: "", id:""})
        alert ("Parabéns! Sua playlist foi criada com sucesso!")
    };

    render () {
        return (
            <EstiloDiv>
                <EstiloLabel for="nomePlaylist"> 
                    Crie uma nova playlist 
                </EstiloLabel>
                <EstiloInput 
                    placeholder="Nome da playlist"
                    onChange={this.eventoPlaylist}
                    value={this.state.name}/>
                <EstiloInput 
                    placeholder="Nome da música"/>
                <EstiloInput 
                    placeholder="Nome do artista"/>
                <EstiloInput 
                    placeholder="Link da música"/>
                <button onClick={this.criandoPlaylist}> Salvar </button>
            </EstiloDiv>         
        );
    }
}

export default NovaPlaylist;