import React from 'react';


import auth from '../components/auth.js';

import { withRouter } from 'react-router-dom';


import Button from '@material-ui/core/Button';


import { makeStyles } from "@material-ui/styles";


const useStyles2 = makeStyles(
    {
        root:
        {
            backgroundColor: "black",
                background: "black",
                //border: 50,
                borderRadius: 3,
                boxShadow: '0 0px 0px 0px #80ffdb',
                color: 'white',
                height: 50,
                padding: '0 30px',
                width: 400,
            
            '&:hover': {
                



                background: 'linear-gradient(165deg, #80ffdb 10%, #48bfe3 90%)',
            border: 50,
            borderRadius: 3,
            boxShadow: '2px 2px 170px 20px #6930c3',
            color: 'black',
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


const Errorpage = props => 
{

    const classes = useStyles2();

    return (

        <div>
            <h1> ERROR PLEASE GO BACK TO LOGIN </h1>
            <Button
                className={classes.root}
                onClick={
                    () => {

                        auth.logout(() => {
                            props.history.push("/login");
                        })
                    }
                }
            >
                BACK TO LOGIN
    </Button>


        </div>

    )


}

export default withRouter(Errorpage);