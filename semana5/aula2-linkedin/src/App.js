import React from 'react';
import './App.css';
import PageSection from './components/PageSection/PageSection.js';
import BigCard from './components/BigCard/BigCard.js';
import SmallCard from './components/SmallCard/SmallCard.js';
import ImageButton from './components/ImageButton/ImageButton.js';

function App() {
    return ( <div className = "App" >
        <PageSection titulo="Dados Pessoais"/ >
        <BigCard subtitulo="Astrodev"/>
        <BigCard descricao="Oi, eu sou o Astrodev. Sou o chefe dos alunos da Future4. Adoro pedir e-mails na sexta-feira e esperar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles."/>
        <SmallCard infos="Email: future4code@gmail.com"/>
        <SmallCard infos="Endereço: Rua do Futuro, 4"/>
        <ImageButton botao="Ver Mais"/>
        <PageSection titulo="Experiências Profissionais"/ >
        <BigCard subtitulo="Future4"/>
        <BigCard descricao="Formando desenvolvedores para o futuro."/>
        <BigCard subtitulo="Outsmart"/>
        <BigCard descricao="Criando apps incríveis para grandes clientes."/>
        <PageSection titulo="Minhas redes sociais"/ >
        <ImageButton botao="Facebook"/>
        
        </div>
    );
}

export default App;