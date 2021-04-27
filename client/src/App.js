import { useState, useEffect } from 'react';
import './App.css';


function App({drizzle}) {
const [myString, setMyString] = useState(null)

//lecture
useEffect(async () => {
  const contract = drizzle.contracts.Store;
  let abonnement = await contract.methods.myString().call();
  setMyString(abonnement)
},[])

  return (
    <div className="App-header">
      <header>
        <h1> Bienvenue dans notre exemple de store avec Drizzle</h1>
      </header>
      <main>
        <h3>Voici votre texte enregistré sur la blockchain :</h3>
        <h2>{myString || "data introuvable"}</h2>
      </main>
    </div>
  );
}

export default App;
