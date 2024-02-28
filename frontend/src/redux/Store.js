import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'
import { userreducer } from './reducer/Reducer';
import { Reducererror } from './reducer/Reducererror';
const routereducer=combineReducers({userreducer,Reducererror})
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 export const store = createStore(routereducer, composeEnhancers(
    applyMiddleware(thunk)
  ));