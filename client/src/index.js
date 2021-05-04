import React from "react";
import {render} from 'react-dom';
import { generateStore } from '@drizzle/store'
import { Provider } from "react-redux";
import { Drizzle } from "@drizzle/store";
import { drizzleReactHooks } from '@drizzle/react-plugin';
import contractEventNotifier from "./middleware";
import drizzleOptions from "./utils/drizzleOptions";
import AppContainer from "./AppContainer";
import reduxStore from "./reduxStore";
import LoadingContainer from "./LoadingContainer";

const appMiddlewares = [ contractEventNotifier ]

const store = generateStore({
  drizzleOptions,
  appMiddlewares,
  disableReduxDevTools: false  // enable ReduxDevTools!
})
const drizzle = new Drizzle(drizzleOptions,store);
const { DrizzleProvider, Initializer } = drizzleReactHooks;

const rootReactElement = (
  <Provider store={reduxStore}>
    <DrizzleProvider drizzle={drizzle}>
      <Initializer
      error="There was an error."
      loadingContractsAndAccounts="loading contracts & accounts..."
      loadingWeb3="loading web3..."
    >
        <AppContainer />
      </Initializer>
    </DrizzleProvider>
  </Provider>
);

const target = document.getElementById("root");
render(rootReactElement, target);