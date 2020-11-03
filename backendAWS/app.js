
// lets require that we are running the latest version of expresss
const express = require('express');
// Create an app in which we call the express interface 
const app = express();
// Then choose our port
const port = 5000;

// Request the the app send a GET request to our root URL '/', it should 
// recieve a response called res 
// This is an HTTP GET request 
// We send the request and expect a RESPONSE back 
app.get('/',(req,res) => // This is an arrow function 
{
    res.send(" Hello Team 4  ! ")//Change to team to show example of auto update
});

// Now we can listen to port 5000
// http://localhost:5000/
app.listen(port, () => // Special empty param arrow function
{
    //Just your standard debug console log 
    console.log(`Example app listening at http://localhost:${port}`)
});