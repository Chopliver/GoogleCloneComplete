import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Home from "./components/Home";
//import App from "./App";
import { SearchProvider } from "./SearchProvider";
import reducer, { initialState } from "./reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SearchProvider initialState={initialState} reducer={reducer}>
    <Home />
  </SearchProvider>
);
