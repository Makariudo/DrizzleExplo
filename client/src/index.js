import React from "react";
import {render} from 'react-dom';
import { DrizzleContext } from '@drizzle/react-plugin';
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./utils/drizzleOptions"
import App from "./App"

const drizzle = new Drizzle(drizzleOptions)

const rootReactElement = (
  <DrizzleContext.Provider drizzle={drizzle}>
    <DrizzleContext.Consumer>
    {drizzleContext => {
        const {drizzle, drizzleState, initialized} = drizzleContext;
        if(!initialized) {
          return "is Loading..."
        }
        return (
            <App drizzle={drizzle} drizzleState={drizzleState} />
          )
        }}
    </DrizzleContext.Consumer>
  </DrizzleContext.Provider>
);

const target = document.getElementById("root");
render(rootReactElement, target);