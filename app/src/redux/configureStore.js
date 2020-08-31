import {createStore,combineReducers,applyMiddleware} from "redux";
import {pings} from "./ping";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const configureStore=()=>{
const store=createStore(
    combineReducers({
        pings:pings,
    }),
    applyMiddleware(thunk,logger));
    return store;
}