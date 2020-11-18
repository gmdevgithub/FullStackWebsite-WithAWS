
//Basic imports
import React from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import '../css/Crack.css';


//Imports for bootstrap css styling 
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/login.css';
import { Grid } from "@material-ui/core";
import Crack from "../assets/Crack.png"




const Login = () => {

    return (

        <div className="App">

  
             
            <form action="/action_page.php" method="post">

            <div class="imgcontainer">
              <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
            </div>


                <div class="container">
                    <label for="uname"><b>Username</b>
                    </label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />


                    <button type="submit">Login</button>
                    <label>
                        
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                            </label>
                </div>



                <div class="container" style={ { backgroundColor: "#f1f1f1" } } >
                    <button type="button" class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                </div>

                
            </form>

               

        </div>
        

    )

};

export default Login;