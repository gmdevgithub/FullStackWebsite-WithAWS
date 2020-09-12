
//Basic imports
import React from 'react';
import logo from './logo.svg';
import './App.css';




//Imports for bootstrap css styling 
import "bootstrap/dist/css/bootstrap.min.css";



//Imports for routing 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import HomePage from "./HomePage.js";
import Users from "./Users.js";




function App() {


    return (

      <Router>

        
          <br />
          
          <Route path='/' exact component={HomePage} />
          <Route path='/users' exact component={Users} />

      
      </Router>

    );


}











export default App;
