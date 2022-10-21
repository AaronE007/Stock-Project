import React from "react";
import {Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

function App() {
  
  return (
    <div>
      <NavBar  />
      <main>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignUpForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
