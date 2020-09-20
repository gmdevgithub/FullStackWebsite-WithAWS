
//Basic imports
import React, {Component} from 'react';
import axios from 'axios';
import logo from '../assets/logo.svg';
import '../css/App.css';
import '../css/Crack.css';
import Gio from "../assets/Gio.png"



//Imports for bootstrap css styling 
import "bootstrap/dist/css/bootstrap.min.css";
import { DesktopWindowsRounded } from '@material-ui/icons';





export default class Users extends Component {


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

    render(){

    return (

        <div className="App">
            <h1 color = "red" >BRUH</h1>

            <header className="App-header">
                     <img src={Gio} className="App-logo" alt="logo" />
            </header>

            <div>
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
            </div>
        </div>
        
    )
    }

};

