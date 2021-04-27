import { useState, useEffect } from 'react';
import { newContextComponents } from "@drizzle/react-components";
import './App.css';

const {AccountData, ContractData, ContractForm} = newContextComponents

function App({drizzle, drizzleState}) {

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
