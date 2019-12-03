import React from 'react';
// import PropTypes from 'prop-types';

function Etapa2() {
    return (
      <div className="App">
        <h2> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </h2>
        <label for="curso">
            5. Qual curso?
        </label> <br/><br/>
        <input 
            type="text"
            name="curso"
            id="curso"/> <br/><br/>
        <label for="unidade">
            6. Qual a unidade de ensino?
        </label> <br/><br/>
        <input 
            type="text"
            name="unidade"
            id="unidade"/> <br/><br/>
        </div>
    );
  }
 
  export default Etapa2;
  