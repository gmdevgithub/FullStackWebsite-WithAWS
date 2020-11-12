
//Basic imports
import React from 'react';
import logo from './assets/logo.svg';
import './css/App.css';




//Imports for bootstrap css styling 
import "bootstrap/dist/css/bootstrap.min.css";



//Imports for routing 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Components to render 
import HomePage from "./components/HomePage.js";
import Users from "./components/Users.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";




function App() {


    return (

      <Router>

        <Header />

          <br />
          
          <Route path='/' exact component={HomePage} />
          <Route path='/users' exact component={Users} />
         
        <Footer />

      
      </Router>

    );


}











export default App;
