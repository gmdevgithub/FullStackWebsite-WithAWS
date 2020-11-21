import React from "react";

import { AppBar, colors, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AccessibleIcon from '@material-ui/icons/Accessible';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import auth from '../components/auth.js';

import { withRouter } from 'react-router-dom';


import Button from '@material-ui/core/Button';



//Imports for routing 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const useStyles = makeStyles(() => (
{
    typographyStyles:
    {

    flex: 1

  
    }
 
}
));


const useStyles2 = makeStyles(
  {
      root:
      {
          background: 'linear-gradient(165deg, #80ffdb 10%, #48bfe3 90%)',
          border: 50,
          borderRadius: 3,
          boxShadow: '2px 2px 170px 20px #6930c3',
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
              height: 50,
              padding: '0 30px',
              width: 400,
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


const Header = props => {

  const classes = useStyles2();
  

  return (

    <AppBar position="sticky" style = {{  marginTop: "-30px", backgroundColor: "#31c5d8"}}>
      <Toolbar position="top">

        


        <Link to="/" style={{ marginRight: 8 }}>

          <Typography className={classes.typographyStyles}
            style={{
              color: "#80FFDB",
              fontWeight: "bold"
            }}>
            Home
        </Typography>

        </Link>


    

        <Link to="/users" style={{ marginRight: 10 , marginLeft: 30}}>
            
        <Typography className={classes.typographyStyles}
        style = {{ 
            color: "#80FFDB" ,
            fontWeight: "bold",
            textAlign: "center"
        }}>
          Page 2
        </Typography>

        </Link>

        
      

        

        <ShoppingCartIcon style={{ marginRight: 10 , marginLeft: 10}}/>
        <AccessibleIcon style={{ marginRight: 10 , marginLeft: 10}}/>


        <Button 
            className={classes.root}
            onClick= {
                () => {
                    
                    auth.logout( () => {
                      props.history.push( "/login");
                    })
                }
            }
            >
                Logout
        </Button>

      </Toolbar>
    </AppBar>

  );
};

export default withRouter(Header);