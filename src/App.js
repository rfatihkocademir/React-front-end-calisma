import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import './App.css';
import NavigationBar from "./components/NavigationBar";
import Register from "./components/Register";
import Login from "./components/Login";
import Product from "./components/Product";
import Productview from "./components/Productview";

function App() {
  return (

      <div>
          <NavigationBar/>

          <Router >
              <Route exact path="/" component={Productview}/>
              <Route path="/register" component={Register}/>
              <Route path="/login" component={Login}/>
          </Router>
      </div>

  );
}
export default App;
