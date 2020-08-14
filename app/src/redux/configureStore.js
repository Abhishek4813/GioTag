import {createStore,combineReducers,applyMiddleware} from "redux";
import {pings} from "./ping";
import logger from 'redux-logger';

export const configureStore=()=>{
const store=createStore(
    combineReducers({
        pings:pings,
    }),
    applyMiddleware(logger));
    return store;
}