import React from 'react';
// import PropTypes from 'prop-types';

function Etapa3() {
    return (
      <div className="App">
        <h2> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h2>
        <label for="porque">
            5. Por que você não terminou um curso de graduação?
        </label> <br/><br/>
        <input 
            type="text"
            name="porque"
            id="porque"/> <br/><br/>
        <label for="complementar">
            6. Você fez algum curso complementar?
        </label> <br/><br/>
        <select type="text">
            <option> Curso técnico </option>
            <option> Cursos de inglês </option>
            <option> Cursos de inglês </option>
        </select> <br/><br/>
        </div>
    );
  }
 
  export default Etapa3;