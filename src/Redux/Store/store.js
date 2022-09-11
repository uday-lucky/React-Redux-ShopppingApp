const { createStore } = require("redux");
const { allReducers } = require("../Reducers");

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) {
          return undefined;
        }
        return JSON.parse(serializedState);
      } catch (e) {
        return undefined;
      }
    };
    const peristedState = loadState();
    export const store = createStore(allReducers,peristedState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());