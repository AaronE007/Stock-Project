import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import RecipeList from "../pages/RecipeList";
import NewRecipe from "../pages/NewRecipe";
import Home from "./Home";

function App() {
  
  return (
    <div>
      <NavBar  />
      <main>
        <Routes>
          <Route path="/new"> 
          </Route>
          <Route path="/">
          <Home />
          </Route>
          <Route path="/">
          <Home />
          </Route>
          <Route path="/logout">
          <Home />
          </Route>
          <Route path="/login">
          <Home />
          </Route>
          <Route path="/signup">
          <Home />
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
