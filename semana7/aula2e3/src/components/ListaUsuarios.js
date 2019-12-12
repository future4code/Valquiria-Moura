import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const EstiloLista = styled.div`
display: flex;
flex-direction: column;
margin: 5px;
align-items: center;
width: 250px;
`;

const baseURL = 'https://us-central1-future4-users.cloudfunctions.net/api';

const ListaUsuarios = props => {
    const eventoDelete = async() => {
        
        const url = `${baseURL}/users/deleteUser?id=${props.usuario.id}`;

        const axiosConfig = {
            headers: {
                'api-token': 'valquiria'
            }
        };
        try {
            await axios.delete(url, axiosConfig);
            props.deletarUsuario();
            alert ("Apagado com sucesso!")
        } catch (error) {
            alert (error.message);
        }
    };

    return (
        <EstiloLista>
            <li>
                {props.usuario.name} <button onClick={eventoDelete}> Apagar </button>
            </li>
            </EstiloLista>
    );
};

export default ListaUsuarios;