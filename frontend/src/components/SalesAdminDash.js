
//Basic imports
import React, {Component} from 'react';
import axios from 'axios';
import logo from '../assets/logo.svg';
import '../css/App.css';
import '../css/Crack.css';
import Gio from "../assets/Gio.png";




//Imports for bootstrap css styling 
import "bootstrap/dist/css/bootstrap.min.css";
import { DesktopWindowsRounded } from '@material-ui/icons';

import Header from "./Header.js";
import Footer from "./Footer.js";




export default class SalesAdminDash extends Component {

    
   

    // MAIN RENDER 
    render(){

    return (

         

        <div className="App">

            <Header/>

            {/* Spacer  */}
            <div class="container-fluid" style={ { margin: 200 } } />

            <h1> SalesAdmin </h1>

            {/* Spacer  */}
            <div class="container-fluid" style={ { margin: 200 } } />

  
         


        <Footer/>

        </div>
        
    )
    }

};

