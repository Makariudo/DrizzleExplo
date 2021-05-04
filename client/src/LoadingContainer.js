import React from 'react'
import { drizzleReactHooks } from '@drizzle/react-plugin'

const {useDrizzleState} = drizzleReactHooks

const LoadingContainer = ({children}) => {
  const drizzleStatus = useDrizzleState(state => state.drizzleStatus);
  if(drizzleStatus.intialized === false) {
    return "Loading..."
  }else {
     return (
    <>
      {children}
    </>
  )
  }
}
export default LoadingContainer