import React from "react";
import {Switch, Route, Link} from 'react-router-dom'; 
import './App.css';

const App = () => {






  return (
    <div className="App">
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to="/">Home Page</Link>
          <Link to="/pizza">Form</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <form>
            <label>
              <button id="order-pizza"type="submit">Order Pizza!</button>
            </label>
          </form>
        </Route>
        <Route exact path="/pizza">
          <form id="pizza-form">
            this is the pizza form
          </form>
        </Route>
      </Switch>
    </div>
  );





};
export default App;
