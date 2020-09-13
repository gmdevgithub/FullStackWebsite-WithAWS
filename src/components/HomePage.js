
//Basic imports
import React from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import '../css/Crack.css';




//Imports for bootstrap css styling 
import "bootstrap/dist/css/bootstrap.min.css";


import { Grid } from "@material-ui/core";

import Crack from "../assets/Crack.png"





const HomePage = () => {

    return (

        <div className="App">
             
        <Grid container direction="column">

            <Grid item>
                <h1>Our Crack is grade A and can be made in 
                milliseconds
                 </h1>
            </Grid>

            <Grid item container>

                {/** Gutter */}
                <Grid item xs={false} sm={2} />

                <Grid item xs={4} sm={2}>
                  <header className="App-header">
                     <img src={logo} className="App-logo" alt="logo" />
                  </header>
                </Grid>

                <Grid item xs={4} sm={4}>
                  <header className="App-header">
                     <img src={Crack} className="Crack-logo" alt="logo" />
                  </header>
                </Grid>

                <Grid item xs={4} sm={2}>
                  <header className="App-header">
                     <img src={logo} className="App-logo" alt="logo" />
                  </header>
                </Grid>
                
               
             

                {/** Gutter */}
                <Grid item xs={false} sm={2} />

            </Grid>

            <Grid item>
                <h1>Checkout our second page for even more 
                    cracks
                </h1>
            </Grid>
        </Grid>

           

        </div>

       
    )

};

export default HomePage;