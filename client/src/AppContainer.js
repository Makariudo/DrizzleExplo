import React from 'react';
import { drizzleReactHooks} from '@drizzle/react-plugin';
import App from './App';
 
 const DrizzleContainer = () => {
   //recup instance drizzle et le drizzlestate
  const { useDrizzle, useDrizzleState } = drizzleReactHooks;
  const drizzleState = useDrizzleState(state => ({...state}))
  const {drizzle} = useDrizzle()
  //retounr le composant avec le store redux en plus
  return <App drizzleState={drizzleState} drizzle={drizzle} />
}

export default DrizzleContainer 

