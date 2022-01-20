import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


//storing my rootreducer in store;
import rootReducer from "./reducers/index";


const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;