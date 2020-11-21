
//Basic imports
import React from 'react';
import '../css/App.css';
import '../css/Crack.css';
import auth from '../components/auth.js';


//Imports for bootstrap css styling 
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/login.css';
import '../css/subtitle.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';


const useStyles = makeStyles(
    {
        root:
        {
            background: 'linear-gradient(165deg, #80ffdb 10%, #48bfe3 90%)',
            border: 50,
            borderRadius: 3,
            boxShadow: '2px 2px 170px 30px #80ffdb',
            color: 'black',
            height: 50,
            padding: '0 30px',
            width: 400,
            '&:hover': {
                backgroundColor: "black",
                background: "black",
                //border: 50,
                borderRadius: 3,
                boxShadow: '0 0px 0px 0px #80ffdb',
                color: 'white',
                height: 100,
                padding: '0 30px',
                width: 700,
            },
            form: {
                '& .MuiTextField-root': {
                    width: 200,
                },
                
            },
            username:{
                backgroundColor: "white",
                color: "red" 
               
            },
            

        }
    });


    const usestyles2 = makeStyles(
        {
            root:
            {
                background: "black",
                //border: 50,
                //borderRadius: 3,
                boxShadow: '2px 2px 80px 2px #7400b8',
                color: 'white',
                height: 70,
                //padding: '0 30px',
                width: 400,
                padding: 10,
                margin: "dense"
                
                

            },
        });


const Login = props => {

    const classes = useStyles();
    const forms = usestyles2();

    return (

        <div className="App">


            {/* Spacer  */}
            <div class="container-fluid" style={ { margin: -20  } } />
             

            <div class="title">
                <h4>Plant Repair Services<br/> <br/> Sales Associate System <br/> <br/> LOGIN</h4>
            </div>
            
            <FormControl>

                <FormHelperText 
                style = {{ color: "white" }} 
                id="my-helper-text">
                    Username
                </FormHelperText>

                <Input 

                    classes={{
                        root: forms.root, // class name, e.g. `classes-nesting-label-x`
                    }}
                id="my-input" 
                aria-describedby="my-helper-text"
                 />


                
                <FormHelperText 
                style = {{ color: "white" }} 
                id="my-helper-text">
                    Password
                </FormHelperText>

                <Input

                    classes={{
                        root: forms.root, // class name, e.g. `classes-nesting-label-x`
                    }}
                    id="my-input"
                    aria-describedby="my-helper-text"
                />
                
            </FormControl>

                
                
           
            

            




            {/* Spacer  */}
            <div class="container-fluid" style={ { margin: 40  } } />
                
            <Button 
            className={classes.root}
            onClick= {
                () => {
                    
                    auth.login( () => {
                        props.history.push( "/");
                    })
                }
            }
            >
                Login
            </Button>
                
           
            <CssBaseline />
            <Container maxWidth="large">
                <Typography component="div" style={{ backgroundColor: 'black', height: '50vh' }} />
            </Container>
      
            {/* Spacer  */}
            <div class="container-fluid" style={ { margin: 20 } } />

        </div>
        

    )

};

export default Login;