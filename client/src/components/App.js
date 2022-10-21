import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import RecipeList from "../pages/RecipeList";
import NewRecipe from "../pages/NewRecipe";
import 

function App() {
  
  return (
    <>
      <NavBar  />
      <main>
        <Routes>
          <Route path="/new">
            <NewRecipe user={user} />
          </Route>
          <Route path="/">
            <RecipeList />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
