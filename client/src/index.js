import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {Provider} from 'react-redux';
import store from './store';


const oldFetch = window.fetch;
window.fetch = (url, settings = {}) => (
  oldFetch(url, {
    ...settings,
    headers: {
      ...settings.headers,
      authorization: localStorage.getItem("token"),
    },
  });
);


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById("root")
);
