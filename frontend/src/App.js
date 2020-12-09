
//Basic imports
import React, { useContext, createContext, useState } from "react";
import logo from './assets/logo.svg';
import './css/App.css';


//Imports for bootstrap css styling 
import "bootstrap/dist/css/bootstrap.min.css";


import 
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";


//Components to render 
import HomePage from "./components/HomePage.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Login from "./components/Login.js";
import Error from "./components/Errorpage.js";
import {Protectedroute} from "./components/Protectedroute.js";

import SalesDash from "./components/SalesDash.js";
import SalesAdminDash from "./components/SalesAdminDash.js";





function App() {



 
    return (

      
        <Router>



          <br />


          <Route path='/login' exact component={Login} />


          <Protectedroute path='/' exact component={HomePage} />


          <Route path='/SalesDash' exact component={SalesDash} />

          <Route path='/SalesAdminDash' exact component={SalesAdminDash} />


          <Route path='/error' exact component={Error} />

          

        </Router>

      

    );


}




export default App;
