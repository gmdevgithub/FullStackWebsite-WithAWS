import React from "react";

import { AppBar, colors, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AccessibleIcon from '@material-ui/icons/Accessible';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


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


const Header = () => {

  const classes = useStyles();

  return (

    <AppBar position="static" color= "transparent">
      <Toolbar>

        


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

      </Toolbar>
    </AppBar>

  );
};

export default Header;