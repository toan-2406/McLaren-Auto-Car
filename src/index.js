import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import "./sass/index.scss";

import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
