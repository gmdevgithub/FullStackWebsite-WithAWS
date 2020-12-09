
// lets require that we are running the latest version of expresss
const express = require('express');
// Create an app in which we call the express interface 
const app = express();
// Then choose our port
const port= 8080;


var cors = require('cors')
var bodyParser = require ('body-parser')


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var route = require("../backendAWS/routes.js");

route(app);





// Load the MySQL pool connection
const pool = require('../backendAWS/AWSconnection.js');
// Load the MySQL pool connection
const pool2 = require('../backendAWS/Legacyconnection.js');



//AMAZON 
let statment3 = 'SELECT * FROM Quote;';



//LEGACY
let statment = 'SELECT * FROM customers';
console.log(" Query is " + statment);

let statment2 = 'SELECT * FROM `parts` ORDER BY `number` ASC ';
console.log(" Query is " + statment);






/* app.get( '/getlegacy' , ( req , res ) => // This is an arrow function 
{


    let showallcustomers;

    pool2.query(statment, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }

        showallcustomers = results[0];

    });
    

    res.json( showallcustomers )//Change to team to show example of auto update
       
    
   
}); */


/* 
app.get( '/getaws' , ( req , res ) => // This is an arrow function 
{


    let showallquotes;

    pool.query(statment3, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }

        showallquotes = results[0];

    });
    

    res.json( showallquotes )//Change to team to show example of auto update
       
    
}); */









// ^^ Dont worry about this 


//<Route path='/SalesDash' exact component={SalesDash} />
//<Route path='/SalesAdminDash' exact component={SalesAdminDash} />

// Request the the app send a GET request to our root URL '/', it should 
// recieve a response called res 
// This is an HTTP GET request 
// We send the request and expect a RESPONSE back 
/* app.get( '/SalesDash' , ( req , res ) => // This is an arrow function 
{

    

    pool.query(statment3,  (err, results, fields) => 
    {
    if (err) 
    {
        return console.error(err.message);
    }



    res.send(

        console.log(results[0])

    
        )//Change to team to show example of auto update
       
        

    });


   
}); */




/* app.get( '/SalesAdminDash' , ( req , res ) => // This is an arrow function 
{
    res.send(" Hello Team 4  ! ")//Change to team to show example of auto update
});
 */




// Now we can listen to port 5000
// http://localhost:5000/
app.listen(port, (err) =>{
    if(err){
    return console.log('error');}
    console.log("using port:"+port);
});