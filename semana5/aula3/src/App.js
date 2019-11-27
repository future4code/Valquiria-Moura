import React from 'react';
import './App.css';
import PageSection from './components/PageSection/PageSection.js';
import Images from './components/Images/Images.js';
import Interacao from './components/Interacao/Interacao.js';
import curtir from './components/icones/favorite-white.svg';
import comentario from './components/icones/comment_icon.svg';


function App() {
  return (
    <div className="App">
        
        <section className="Section">
        <PageSection conta="future4.br"/>
        <Images imagem="https://2.bp.blogspot.com/-2D4L7sKDbC4/Vt2_j1wWxgI/AAAAAAAAAfI/R4liNaN-rMY/s1600/charge%2B1.jpg"/>
        <div className="Interacao">
        <Interacao like={curtir}/>
        <Interacao like={comentario}/>
        </div>
        </section>
        
        <section className="Section">
        <PageSection conta="future4.br"/>
        <Images imagem="https://4.bp.blogspot.com/-XJZ-lao0Chg/V4V-sSRgSbI/AAAAAAAAAGs/7wHaQ5wbflsv8mTPP3p55sB5zLd-Gv3EgCLcB/s1600/12036946_1665478667031661_6534480905071346838_n.png"/>
        <div className="Interacao">
        <Interacao like={curtir}/>
        <Interacao like={comentario}/>
        </div>
        </section>
        
        <section className="Section">
        <PageSection conta="future4.br"/>
        <Images imagem="https://i.pinimg.com/originals/28/56/52/28565240e57755bd870dfb74258157bb.png"/>
        <div className="Interacao">
        <Interacao like={curtir}/>
        <Interacao like={comentario}/>
        </div>
        </section>
    
    </div>
  );
}

export default App;

