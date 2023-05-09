import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storePersistor from "./Redux/index";

const { store, persistor } = storePersistor;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
