import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ListaUsuarios from './ListaUsuarios';

const MainContainer = styled.div`
margin: 5%;
padding: 0;
display:flex;
justify-content: center;
`;

const EstiloDiv = styled.div`
margin: 1%;
padding: 1%;
display: flex;
flex-direction: column;
align-items: center;
`;

const baseURL = 'https://us-central1-future4-users.cloudfunctions.net/api';

class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todosUsuarios: []
        };
    }

    componentDidMount() {
        this.getTodosUsuarios();
    }

    getTodosUsuarios = async () => {
        const axiosConfig = {
            headers: {
                'api-token': 'valquiria'
            }
        };
        try {
        const response = await axios.get(
            `${baseURL}/users/getAllUsers`,
            axiosConfig
        );
        this.setState({ todosUsuarios: response.data.result});
        } catch (error) {
            alert (error.message);
        }
    };
    render() {
        return (
            <MainContainer>
                <EstiloDiv>
                    <h3> Lista de Usuários </h3>
                    {this.state.todosUsuarios.map(usuario => (
                        <ListaUsuarios 
                        usuario={usuario}
                        deletarUsuario={this.getTodosUsuarios}
                        />
                    ))}
                </EstiloDiv>
                </MainContainer>
        );
    }
}

export default Lista;