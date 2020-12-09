import React from 'react';

import auth from './auth';



import 
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";


export const Protectedroute = ( {component: Component, ...rest }) => 
{

    return (


        <Route {...rest} 
        
        render = { (props) => 
            
        {


                if(auth.isAuthenticated())
                {
                    return <Component {...props} />
                }
                else
                {

                    return <Component {...props} />
                    
                    {/* return <Redirect to = {
                    {
                    
                        pathname: "/error",
                        state:
                        {
                            from: props.location
                        }
                    
                    } 

                    } /> */}
                }

        }}
        
        />

    )


}