import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";

import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import "./css/styles.css";

import rootReducer from "./reducer";
import { loadState, saveState } from "./Services/localStorage";
// import { AuthReducer } from './reducer/UserAuthReducer';

// const persistedState = loadState();

const store = createStore(
  rootReducer, applyMiddleware(logger, thunk));

store.subscribe(() => {
  saveState({
    userLoggedIn: store.getState().AuthReducer.userLoggedIn,
    userData: store.getState().AuthReducer.userData,
    authStatus: store.getState().AuthReducer.authStatus
    // Fname: store.getState().Fname,
    // Lname: store.getState().Lname,
    // fullName : store.getState().fullName,
    // email : store.getState().email
  });
});

// const

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
