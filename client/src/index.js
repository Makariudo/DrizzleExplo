import React from "react";
import {render} from 'react-dom';
import { generateStore } from '@drizzle/store'
import { Drizzle } from "@drizzle/store";
import { drizzleReactHooks } from '@drizzle/react-plugin';
import contractEventNotifier from "./middleware";
import drizzleOptions from "./utils/drizzleOptions";
import AppContainer from "./AppContainer";
import appReducers from "./reducers";

const appMiddlewares = [ contractEventNotifier ]

const store = generateStore({
  drizzleOptions,
  appMiddlewares,
  appReducers: {appStore: appReducers},
  disableReduxDevTools: false  // enable ReduxDevTools!
})
const drizzle = new Drizzle(drizzleOptions,store);
const { DrizzleProvider, Initializer } = drizzleReactHooks;

const rootReactElement = (
    <DrizzleProvider drizzle={drizzle}>
      <Initializer
      error="There was an error."
      loadingContractsAndAccounts="loading contracts & accounts..."
      loadingWeb3="loading web3..."
    >
        <AppContainer />
      </Initializer>
    </DrizzleProvider>
);

const target = document.getElementById("root");
render(rootReactElement, target);