import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import RecipeList from "../pages/RecipeList";
import NewRecipe from "../pages/NewRecipe";
import Home from "./Home";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

function App() {
  
  return (
    <div>
      <NavBar  />
      <main>
        <Routes>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignUpForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
