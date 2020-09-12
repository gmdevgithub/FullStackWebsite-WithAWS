
//Basic imports
import React from 'react';
import logo from './logo.svg';
import './App.css';




//Imports for bootstrap css styling 
import "bootstrap/dist/css/bootstrap.min.css";




const HomePage = () => {

    return (

        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
        
    )

};

export default HomePage;