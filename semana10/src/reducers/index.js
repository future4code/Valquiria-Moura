import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import viagens from "./viagens";
import inscricoes from "./inscricoes";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    viagens,
    inscricoes,
  });
