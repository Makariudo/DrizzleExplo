import { useState, useEffect, useCallback, useMemo } from 'react';
import { newContextComponents } from "@drizzle/react-components";
import './App.css';

const {AccountData, ContractData, ContractForm} = newContextComponents

function App({drizzle, drizzleState}) {

  const subscribeData = useCallback(async () => {
     const dataKey = await drizzle.contracts.Store.methods.myString.cacheCall();
     console.log(dataKey);
     console.log(drizzleState.drizzleStatus.initialized)
     if(drizzleState.drizzleStatus.initialized){
       const data = await drizzleState.contracts.Store.myString[dataKey].value;
       console.log(data)
       return data
     }
    },[drizzleState])

  useEffect(() => {
  subscribeData();
}, [subscribeData]);

  return (
    <div className="App-header">
      <header>
        <h1> Bienvenue dans notre exemple de store avec Drizzle</h1>
      </header>
      <main>
        <h3>Voici votre texte enregistré sur la blockchain :</h3>
        <div>
        <h3> Compte actif :</h3>
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
