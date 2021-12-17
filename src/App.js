import React from "react";
import {Switch, Route, Link} from 'react-router-dom'; 

const App = () => {






  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <form>
            <label>
              <button id="order-pizza"type="submit">Order Pizza!</button>
            </label>
          </form>
        </Route>
      </Switch>
    </div>
  );





};
export default App;
