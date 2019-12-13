import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ListaMusicas from './ListaMusicas';


const EstiloLista = styled.li`
color: white;
`;

const EstiloBotao = styled.button`
margin-left: 10px;
`;

const baseURL = 'https://us-central1-spotif4.cloudfunctions.net/api'

let ListaPlaylists = props => {
    const eventoDelete = async() => {
        const url = `${baseURL}/playlists/deletePlaylist?playlistId=${props.playlist.id}`;
        const axiosConfig = {
            headers: {
                "auth": "val"
            }
        };

        await axios.delete(url,axiosConfig);
        props.deletarPlaylist();
        alert ("Sua playlist foi excluída!")
    };
        return(
            <div>
                <EstiloLista>
                    {props.playlist.name}
                    <EstiloBotao onClick={eventoDelete}> X </EstiloBotao>
                </EstiloLista>
            </div>
    )
}

export default ListaPlaylists;