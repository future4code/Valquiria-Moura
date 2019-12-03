import React from 'react';
// import PropTypes from 'prop-types';

function Basico() {
    return (
      <div className="App">
        <h2> ETAPA 1 - DADOS GERAIS </h2>
        <label for="nome">
            1. Qual o seu nome?
        </label> <br/><br/>
        <input 
            type="text"
            name="nome"
            id="nome"/> <br/><br/>
        <label for="idade">
            2. Qual sua idade?
        </label> <br/><br/>
        <input 
            type="number"
            name="idade"
            id="idade"/> <br/><br/>
        <label for="email">
            3. Qual seu email?
        </label> <br/><br/>
        <input 
            type="text"
            name="email"
            id="email"/> <br/><br/>
        <label for="escolaridade">
            4. Qual a sua escolaridade?
        </label> <br/><br/>
        <select type="text">
            <option> Ensino médio incompleto </option>
            <option> Ensino médio completo </option>
            <option> Ensino superior incompleto </option>
            <option> Ensino superior completo </option>
        </select> <br/><br/>
    </div>
      
    );
  }
 
  export default Basico;
  