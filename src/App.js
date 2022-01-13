import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";

import { Route } from "react-router-dom"
import Header from "./components/header/header.component";


function App() {
  return (
    <div className="bg-pink-200">
      <Header />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
