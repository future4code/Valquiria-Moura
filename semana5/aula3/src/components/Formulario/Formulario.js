import React from "react";
import styled from "styled-components";

const EstiloDiv = styled.div`
    border: 1px solid grey;
    margin: 1%;
    width: 500px;
    height: 220px;
`;

const EstiloForm = styled.form`
    margin: 1%;
    width: 500px;
    height: 220px;
`;

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textoNomeUsuario:"",
            urlFotoPerfil:"",
            urlFotoPost:""
        };
    }

    aoMudarInputUsuario = e => {
        this.setState({
            textoNomeUsuario: e.target.value
        });
    };

    aoMudarInputFotoPerfil = e => {
        this.setState({
            urlFotoPerfil: e.target.value
        });
    };
 
    aoMudarInputFotoPost = e => {
        this.setState({
            urlFotoPost: e.target.value
        });
    };
    
    postar = (e) => {
        console.log(this.state.textoNomeUsuario) //Teste Usuario
        console.log(this.state.urlFotoPerfil) //Teste Perfil
        console.log(this.state.urlFotoPost) //Teste Post
    }

    render(){
        return (
            <EstiloDiv>
                <EstiloForm action="#">
                <br/>
                <label for="usuario"> Nome do Usuário </label>
                <input 
                    type="text" 
                    value={this.state.textoNomeUsuario}
                    name="usuario" 
                    id="usuario"
                    onChange={this.aoMudarInputUsuario}
                        />
                <br/><br/>
                <label for="fotoPerfil"> Foto do Perfil (URL) </label>
                <input 
                    type="url"
                    value={this.state.urlFotoPerfil} 
                    name="fotoPerfil" 
                    id="fotoPerfil"
                    onChange={this.aoMudarInputFotoPerfil}
                    />
                <br/><br/>
                <label for="fotoPost"> Foto à postar (URL) </label>
                <input 
                    type="url"
                    value={this.state.urlFotoPost}  
                    name="fotoPost" 
                    id="fotoPost"
                    onChange={this.aoMudarInputFotoPost}
                    />  
                <br/><br/>
                <button onClick={this.postar}>Postar</button>     
                </EstiloForm>
            </EstiloDiv>
        )
    }
}

export default Formulario;