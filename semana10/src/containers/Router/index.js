import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import ListTripsPage from "../ListTripsPage";
import CriarViagem from "../CriarViagem";
import ListaInscricoes from "../ListaInscricoes";
import Inscricao from "../Inscricao";

const routes = {
  root: "/", //Para o usuário escolher entre login e formulário de aplicação
  listaviagens: "/trips/list", //Para vermos todas as viagens
  criarviagem: "/trips/create", //Para criarmos viagens
  listainscricoes: "/trips/details", //Para vermos os candidatos de uma viagem
  inscricao: "/application-form", //Para qualquer usuário poder se increver
  // Outras rotas aqui
};

// /login → Para o admin poder se logar

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={LoginPage} />
        <Route path={routes.listaviagens} component={ListTripsPage} />
        <Route path={routes.criarviagem} component={CriarViagem} />
        <Route path={routes.listainscricoes} component={ListaInscricoes} />
        <Route path={routes.inscricao} component={Inscricao} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
