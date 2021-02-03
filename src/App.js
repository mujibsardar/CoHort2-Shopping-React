import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import  HomePage from "./components/HomePage";
import  Shopping from "./components/Shopping";
import  Product from "./components/Product";

export class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path="/">
              <HomePage text="Shopping Page" onClick={() => {console.log("Shopping now")}} path="/shopping" />
            </Route>
            <Route exact path="/shopping">
              <Shopping text="Product Page" onClick={() => {console.log("Product Page")}} path="/shopping/34343" />
            </Route>
            <Route exact path="/shopping/:id">
              <Product text="Home Page" onClick={() => {console.log("Going Home")}} path="/" />
            </Route>
          </Switch>
      </div>
    );
  }
}

export default App;
