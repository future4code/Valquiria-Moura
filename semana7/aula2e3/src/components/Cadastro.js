import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MainContainer = styled.div`
margin: 5%;
padding: 0;
display:flex;
justify-content: center;
`;

const EstiloDiv = styled.div`
border: 1px solid black;
margin: 1%;
padding: 1%;
width: 210px;
height: 160px;
display: flex;
flex-direction: column;
align-items: center;
`;

const baseURL = 'https://us-central1-future4-users.cloudfunctions.net/api';

class Cadastro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: ""
        };
    }

    eventoNome = event => {
        this.setState({ name: event.target.value});
    };

    eventoEmail = event => {
        this.setState({ email: event.target.value});
    };

    criandoUsuario = async () => {
        const paraCriarUsuario = {
            name: this.state.name,
            email: this.state.email,
            id: this.state.id
        };

        const axiosConfig = {
            headers: {
                "api-token": "valquiria"
            }
        };

        await axios.post(
            `${baseURL}/users/createUser`,
            paraCriarUsuario,
            axiosConfig
        );
        this.setState({name: "", email: "", id: ""})
        alert ("Cadastro realizado com sucesso")
    };

    render () {
        return (
            <MainContainer>
                <EstiloDiv>
                    <label> Nome </label>
                    <input
                        onChange={this.eventoNome}
                        value={this.state.name}/> <br/>
                    <label> E-mail </label>
                    <input
                    onChange={this.eventoEmail}
                    value={this.state.email}/> <br/>
                    <button onClick={this.criandoUsuario}> Salvar </button>
                </EstiloDiv>
            </MainContainer>
        );
    }
}

export default Cadastro;