import Web3 from "web3";
import Store from "../contracts/Store.json"

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:7545"),
  },
  contracts: [Store],
  events: {
    Store: ["setData"],
  },
};

export default options;