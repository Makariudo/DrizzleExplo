import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 });


const contractsMiddlewares = [];
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...contractsMiddlewares)
    )
);

export default store;