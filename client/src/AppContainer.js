import React from 'react';
import { connect } from "react-redux";
import { drizzleReactHooks} from '@drizzle/react-plugin';
import App from './App';
 
 const DrizzleContainer = (reduxProps) => {
   //recup instance drizzle et le drizzlestate
  const { useDrizzle, useDrizzleState } = drizzleReactHooks;
  const drizzleState = useDrizzleState(state => ({...state}))
  const {drizzle} = useDrizzle()
  //retounr le composant avec le store redux en plus
  return <App drizzleState={drizzleState} drizzle={drizzle} reduxProps={reduxProps} />
}
const mapStateToProps = ({ui}) => {
  return {
    name: ui.name,
  };
};
export default connect(mapStateToProps)(DrizzleContainer); 

