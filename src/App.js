import axios from "axios";
import React, { useState, useEffect } from "react";
import {Switch, Route, Link} from 'react-router-dom'; 
import './App.css';

const initialFormState = {
  name: '', 
  size: '', 
  topping1: false, 
  topping2: false, 
  special: ''
}






const App = () => {

  const [pizzaForm, setPizzaForm] = useState([])
  const [form, setForm] = useState(initialFormState)

  useEffect(() => {
    axios.get('https://reqres.in/api/orders')
      .then((res) => {
        console.log(res.data.data)
        setPizzaForm(res.data.data)
      })
  }, [])

  const changeHandler = (event) => {
    console.log(event.target.name, event.target.value)
  }


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
              <input 
              onChange={changeHandler}
              name="name" 
              value={form.name} 
              id="name-input" 
              type="text">
              </input>
            </label>
            <button id="order-pizza"type="submit">Order Pizza!</button>
          </form>
        </Route>
        <Route exact path="/pizza">
          <form id="pizza-form">
            {
              pizzaForm.map((pizzaForm, index) => {
                return (
                  <p key={`formId${pizzaForm.id}`}>{pizzaForm.name}</p>
                )
              })
            }
            </form>
        </Route>
      </Switch>
    </div>
  );





};
export default App;
