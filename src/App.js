import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import orderFood from "./components/Food/orderFood";

function App() {
  return (
      <Router>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/order-food" component={orderFood} />
            <Route exact path="/cart" component={Cart} />

                <Route exact path="/product/:id" component={SingleItem} />
          </Switch>
        </div>
      </Router>
  );
}


export default App;
