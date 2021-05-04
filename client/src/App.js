import { useEffect, useCallback } from 'react';
import { newContextComponents } from "@drizzle/react-components";
import { drizzleReactHooks } from '@drizzle/react-plugin'

import './App.css';

const {AccountData, ContractData, ContractForm} = newContextComponents
function App({drizzleState, reduxProps, drizzle}) {
  
  
 /*  const subscribeData = useCallback(async () => {
     const dataKey = await drizzle.contracts.Store.methods.myString.cacheCall();
     console.log(dataKey);
     console.log(drizzleState.drizzleStatus.initialized)
     if(drizzleState.drizzleStatus.initialized){
       const data = await drizzleState.contracts?.Store?.myString[dataKey]?.value ?? "pas de data" ;
       console.log(data)
       return data
     }
    },[drizzleState, drizzle.contracts.Store.methods.myString])

  useEffect(() => {
  subscribeData();
}, [subscribeData]); */

  return (
    <div className="App-header">
      <header>
        <h1> Bienvenue dans notre exemple de store avec Drizzle</h1>
      </header>
      <main>
        <h3>Voici votre texte enregistré sur la blockchain :</h3>
        <div>
        <h3> Compte actif :</h3>
        <h4>{drizzleState.accounts[0]}</h4>
        <h4>{reduxProps.name}</h4>
       <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />
         <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Store"
            method="myString"
          />
        <ContractForm drizzle={drizzle} contract="Store" method="SetData" /> 

        </div>
      </main>
    </div>
  );
}

export default App;
