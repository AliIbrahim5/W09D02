// import { createStore, combineReducers } from "redux";
// import {composeWithDevTools} from 'redux-devtools-extension';
// import sigin from './login';

// const reducer = combineReducers ({sigin});

// const stor =()=>{
//     return  createStore(reducer,composeWithDevTools());

// };

// export default stor();

import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import signIn from "./login";

const reducers = combineReducers({ signIn });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
