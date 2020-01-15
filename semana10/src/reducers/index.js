import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import viagens from "./viagens";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    viagens,
  });
