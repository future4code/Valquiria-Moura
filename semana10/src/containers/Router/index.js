import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import ListTripsPage from "../ListTripsPage";
import CriarViagem from "../CriarViagem";
import ListaInscricoes from "../ListaInscricoes";
import Inscricao from "../Inscricao";


export const routes = {
  
  root: "/", //Para o usuário escolher entre login e formulário de aplicação
  login: "/login", //Para o admin poder se logar
  listaviagens: "/trips/list", //Para vermos todas as viagens
  criarviagem: "/trips/create", //Para criarmos viagens
  listainscricoes: "/trips/details", //Para vermos os candidatos de uma viagem
  inscricao: "/application-form", //Para qualquer usuário poder se increver
  
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={HomePage} exact />
        <Route path={routes.login} component={LoginPage} exact />
        <Route path={routes.listaviagens} component={ListTripsPage} exact />
        <Route path={routes.criarviagem} component={CriarViagem} exact/>
        <Route path={routes.listainscricoes} component={ListaInscricoes} exact/>
        <Route path={routes.inscricao} component={Inscricao} exact />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
