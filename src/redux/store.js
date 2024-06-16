import {createStore,applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./rootReducer";
import {thunk} from 'redux-thunk'


const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
// createStore creates a global store where batreducer kept is state i.e bat
 
export default store;  