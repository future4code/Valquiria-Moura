import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import Intro from 'Intro.mp3';

const MainContainer = styled.div`
padding: 0;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: rgb(255,255,128);
`;

const EstiloDiv = styled.div`
border: 1px solid black;
background-color: red;
margin: 15px;
padding: 1%;
width: 210px;
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
`;

const TituloPokemon = styled.img`
width: 300px;
height: 100px;
margin: 10px;
`;

const DivPokemon = styled.div`
border: 1px solid black;
background-color: white;
width: 180px;
height: 100px;
display: flex;
justify-content: center;
margin-top: 5%;
`;

const DivHabilidades = styled.div`
border: 1px solid black;
background-color: white;
width: 180px;
height: 50px;
display: flex;
justify-content: center;
`;

const TextoHabilidades = styled.h4`
color: white;
`;

const baseURL = 'https://pokeapi.co/api/v2'

class Pokedex extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todosPokemons: [],
            selecionePokemon: "",
            habilidade: ""
        }
    }

    buscarPokemons = async () => {
        const response = await axios.get (`${baseURL}/pokemon?limit=151`)
        this.setState({todosPokemons: response.data.results})
    }

    componentDidMount() {
        this.buscarPokemons();
    }

    buscarDetalhes = async (event) => {
        const detalhesURL = event.target.value;
        const response = await axios.get(detalhesURL);
        const fotoURL = response.data.sprites.front_default;
        this.setState({selecionePokemon:fotoURL});
        const habilidadePK = response.data.abilities[0].ability.name;
        this.setState({habilidade:habilidadePK});
    }

    render () {
        return (
            <MainContainer>

                <TituloPokemon src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png"
                alt="Título Pokémon"/>
                <EstiloDiv>
                    <DivPokemon>
                        {this.state.selecionePokemon && <img src={this.state.selecionePokemon} alt="Pokémon"/>}
                    </DivPokemon>
                    <TextoHabilidades> Habilidades: </TextoHabilidades>
                    <DivHabilidades>
                        <p> {this.state.habilidade}</p>
                    </DivHabilidades> <br/>
                    <select onChange={this.buscarDetalhes}>
                        <option> Escolha um Pokémon </option>
                        {this.state.todosPokemons.map((pokemon) => (
                            <option value={pokemon.url}>
                                {pokemon.name}
                            </option>
                        ))}
                    </select>
                </EstiloDiv>
                <footer>
                <p>By Valquíria Moura </p>
                {/* Queria que minha Pokedex falasse mas não consegui */}
                {/* <audio src="Intro.mp3" autoplay/> */}
                </footer>
            </MainContainer>

            
        )
    }
}

export default Pokedex;