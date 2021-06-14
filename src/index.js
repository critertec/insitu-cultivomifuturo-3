import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/Tailwind.min.css";
import Inicio from "./pages/Inicio";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Inicio />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
