import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import {UserProvider} from './components/user';



ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </UserProvider>,
  document.getElementById("root")
);
