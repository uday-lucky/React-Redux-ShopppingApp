const { createStore } = require("redux");
const { allReducers } = require("../Reducers");


export const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());