import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>



        <Typography className={classes.typographyStyles} 
        style = {{ 
            color: "#80FFDB" ,
            textAlign: "center"
            }}>
          Buy our cracks
        </Typography>
       

      </Toolbar>
    </AppBar>
  );
};

export default Footer;