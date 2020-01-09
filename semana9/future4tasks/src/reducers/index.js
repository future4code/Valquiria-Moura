import {combineReducers} from "redux";
import {tarefasReducer} from "./tarefas"

export const rootReducer = combineReducers({
    tarefas: tarefasReducer
});