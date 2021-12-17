import axios from "axios";
import React, { useState, useEffect } from "react";
import {Switch, Route, Link} from 'react-router-dom'; 
import './App.css';
import Form from './Form.js';

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

  /**useEffect(() => {
    axios.get('https://reqres.in/api/orders')
      .then((res) => {
        console.log(res.data.data)
        setPizzaForm(res.data.data)
      })
  }, [])
*/


  const submitHandler = (event) => {
    event.preventDefault()
    console.log("Submitted:", form)

    axios.post('https://reqres.in/api/orders', form)
    .then((result) => {
      console.log(result.data)
      setPizzaForm([result.data, ...pizzaForm])
    })
  }





  const changeHandler = (event) => {
    //console.log(event.target.name, event.target.value, event.target.checked)
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value; 
    setForm({...form, [event.target.name]: value})
  }


  return (
    <div className="App">
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to="/">Home Page</Link><br />
          <Link to="/pizza" id="order-pizza">Order pizza here!</Link><br />
          
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
      
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
            {/**Dropdown */}
            <h4>Select Pizza Size</h4>
            <label>Pizza size:
              <select 
                onChange={changeHandler}
                name="size"
                >
                <option value=''>--Select an option--</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>

                </select>
            </label>


            {/**Checkbox */}
            <h4>Toppings:</h4>
            <label>
              Jalapenos 
              <input 
              onChange={changeHandler}
              type="checkbox" 
              name="topping1" 
              checked={form.topping1}>
              </input>
            </label><br />

            <label>
              Extra Cheese 
              <input 
              onChange={changeHandler}
              type="checkbox" 
              name="topping1" 
              checked={form.topping1}>
              </input>
            </label><br />

            <label>
              Sausage 
              <input 
              onChange={changeHandler}
              type="checkbox" 
              name="topping1" 
              checked={form.topping1}>
              </input>
            </label><br />

            <label>
              Pepperoni 
              <input 
              onChange={changeHandler}
              type="checkbox" 
              name="topping1" 
              checked={form.topping1}>
              </input>
            </label><br />
            <form onSubmit={submitHandler}>
            <label>
              <input 
              onChange={changeHandler}
              name="name" 
              value={form.name} 
              id="name-input" 
              type="text">
              </input>
            </label>
            <button id="order-button"type="submit">Add to Order</button>
          </form>
            
        </Route>
      </Switch>
    </div>
  );





};
export default App;




/**
    <form onSubmit={submitHandler}>
            <label>
              <input 
              onChange={changeHandler}
              name="name" 
              value={form.name} 
              id="name-input" 
              type="text">
              </input>
            </label>
            <button id="order-pizza"type="submit">Click here to order some Pizza</button>
          </form> */