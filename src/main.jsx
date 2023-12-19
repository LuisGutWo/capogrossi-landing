import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import './config/i18n.js';
// import "./config/firebase";

import { BrowserRouter } from "react-router-dom";
// import ProductsContextProvider from "./context/ProductsContext";
// import UserContextProvider from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ProductsContextProvider> */}
      {/* <UserContextProvider> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </UserContextProvider> */}
    {/* </ProductsContextProvider> */}
  </React.StrictMode>
);
