import { createStore ,applyMiddleware} from "redux"
import { rootReducer } from "./reducers/rootReducer";
import rthunk from 'redux-thunk'


const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

 export const store =createStore(rootReducer,enhancer(applyMiddleware(rthunk)));