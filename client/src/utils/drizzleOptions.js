import Store from "../contracts/Store.json"

const options = {
  contracts: [Store],
  events: {
    Store: ["setData"],
  },
};

export default options;