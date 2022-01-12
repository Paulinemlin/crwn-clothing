import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

import { Route } from "react-router-dom"


function App() {
  return (
    <div className="bg-pink-200">
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HomePage} />
        
    </div>
  );
}

export default App;
