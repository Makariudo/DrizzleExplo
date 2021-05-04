
export const initialState = {
    name: "toto",
    age: 38,
  
}

const ui = (oldState= initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...oldState,
      };
  }
};

export default ui;
