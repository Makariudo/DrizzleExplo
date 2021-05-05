import { useEffect, useCallback, useState } from 'react';
import { newContextComponents } from "@drizzle/react-components";
import { ToastContainer, Slide } from 'react-toastify';

import './App.css';

const {AccountData, ContractData, ContractForm} = newContextComponents
function App({drizzleState, reduxProps, drizzle}) {
//redux stuff ??
  const [string, setString] = useState("loading...");
  const [input, setInput] = useState("");
  const [txHashId, setTxHashId] = useState("");
//
  const subscribeData = useCallback(async () => {
       //recup de la clé d'abonnement
      const dataKey = await drizzle.contracts.Store.methods.myString.cacheCall();
       //recup de la value
      const data = await drizzleState.contracts?.Store?.myString[dataKey]?.value ?? "pas de data" ;
      setString(data)
    },[drizzleState, drizzle.contracts.Store.methods.myString])

  useEffect(() => {
  subscribeData();
}, [subscribeData]); 

const handleChange = e => setInput(e.target.value);
const handleSubmit = e => {
  if(e.keyCode === 13) {
    handleSend();
  }
}
const handleSend = async() => {
  const contract = drizzle.contracts.Store;
  const ref = await contract.methods["SetData"].cacheSend(input, {
    from: drizzleState.accounts[0]
  })
  setTxHashId(ref);
}

///TODO separer dans un new composant
const getTxStatus = () => {
  const {transactions, transactionStack} = drizzleState;
  const txHash = transactionStack[txHashId];
  if(!txHash) return null;
  return `Transaction status: ${transactions[txHash] && transactions[txHash].status}`;
}

  return (
    <div className="App-header"> 
      <header>
        <h1> Bienvenue dans notre exemple de store avec Drizzle</h1>
      </header>
      <main> 
        <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        />
     
        <h3>Voici votre texte enregistré sur la blockchain :</h3>
        <div>
        <h3> Compte actif :</h3>
        <h4>{drizzleState.accounts[0]}</h4>
        <h4>{reduxProps.name}</h4>
        <h4>Data de la blockchain : {string}</h4>
        <input type="text" value={input} onChange={handleChange} onKeyDown={handleSubmit} />
        {getTxStatus()}
       {/* <AccountData
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
        <ContractForm drizzle={drizzle} contract="Store" method="SetData" />  */}

        </div>
      </main>
    </div>
  );
}

export default App;
