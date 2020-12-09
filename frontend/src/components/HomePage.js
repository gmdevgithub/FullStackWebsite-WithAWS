
//Basic imports
import React from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import '../css/Crack.css';
import '../css/homepage.css';


//Imports for bootstrap css styling 
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Crack from "../assets/Crack.png"

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: '#72EFDD',
    textAlign: "center",
    textShadow: "2px 2px black"
    

  },
});






const HomePage = () => {

    const classes = useStyles();

    return (

        <div className="App">
        
        <Header/>
        
        <div className="homepage">
            {/* Spacer  */}
            <div class="container-fluid" style={ { margin: 60 } } />

            
             
       
                <h1
                style={{ fontStyle: "oblique" ,  textShadow: "5px 2px #ff0000" }}

                >Welcome to the plant repair services associate & admin system
                 </h1>
            

            

             {/* Spacer  */}
             <div class="container-fluid" style={ { margin: 60 } } />

               
           
                    <Typography className = {classes.root} variant="h5" gutterBottom>
                        If you need to fufill a quote or purchase order please 
                        head to the SalesAssociate page
                    </Typography>
          

             {/* Spacer  */}
             <div class="container-fluid" style={ { margin: 100 } } />

             </div>

        <Footer/>

        </div>
      
       
    )

};

export default HomePage;