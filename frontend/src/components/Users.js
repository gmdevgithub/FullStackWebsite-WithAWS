
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

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";




export default class Users extends Component {

    //CUSTOM DB 
    //Convert to Hook later 
    constructor(props) 
    {
        super(props); 
        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      

            this.state = {
                username: ' ',
        
               
            }
        
    }

    //Change to hook
    onChangeUsername(e)
    {
        this.setState({

            username: e.target.value
        });
    }

    //Change to hook
    onSubmit(e)
    {
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        console.log(user);
        console.log("User Submitted");

        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data))
        

        this.setState({
            username: ' '
        })

    }

    //Java HANDLERS
    handleGET = async e =>
    {

    }

    
    handleSUBMIT = async e =>
    {
        e.preventDefault();

        console.log("Working button ");

        const url = "http://blitz.cs.niu.edu/csci467/";

        axios.get(url, 
            { 
                responseType: 'application/json'
            })
        .then(res => console.log(res.data))
        .catch( err => console.log(err));

        

        
    }
   




    // MAIN RENDER 
    render(){

    return (

         

        <div className="App">

            <Header/>

            {/* Spacer  */}
            <div class="container-fluid" style={ { margin: 200 } } />

            <h1> Page 2 </h1>

            {/* Spacer  */}
            <div class="container-fluid" style={ { margin: 200 } } />

  
         

            {/* For list customers  */}
            <div 
            className ="get_Cust"
            >
                <h3> Get all customer data </h3>
                
                    <button
                     id ="submit" 
                     class="btn btn-light"
                     onClick={this.handleSUBMIT}
                    > 

                     GET 

                     </button>
                   
            </div>


            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>



                {/* Spacer  */}
                <div class="container-fluid" style={ { margin: 500 } } />
          

            {/* Custom  */}
            {/* <div>
                <h3> Create new user</h3>
                <form onSubmit={this.onSubmit}>
                    <div className = "form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                                
                            />
                    </div>
                    <div className = "form-group">
                        <input type ="submit" value="Create User log" className="btn btn-primary">

                        </input>
                    </div>
                    
                </form>
            </div> */}

        <Footer/>

        </div>
        
    )
    }

};

