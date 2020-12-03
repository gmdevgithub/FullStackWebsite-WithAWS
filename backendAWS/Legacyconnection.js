

var mysql = require('mysql')


// Example http:blitz.........
var connection = mysql.createConnection(
    {
     host: "blitz.cs.niu.edu",
     user: "student",
     password: "student",
     port: "3306",
     database: 	"csci467",
     multiStatement: true
    }
 );

var conn = false;


connection.connect(function(err){
    if (err){
        conn=false;
        console.log("failled to connect to legacy db");
        return;
    }
    conn=true;
    console.log('connected to legacy db');
   
});




/* let statment = 'SELECT * FROM customers';


connection.query(statment, (err, results, fields) => 
{
    if (err) 
    {
        return console.error(err.message);
    }

    console.log(results[0])

});
 */

/* 
let statment = 'SELECT * FROM customers';
console.log(" Query is " + statment);

let statment2 = 'SELECT * FROM `parts` ORDER BY `number` ASC ';
console.log(" Query is " + statment);




    
connection.query(statment, (err, results, fields) => 
{
    if (err) 
    {
        return console.error(err.message);
    }

    console.log(results[0])

});


connection.query(statment2, (err, results, fields) => 
{
    if (err) 
    {
        return console.error(err.message);
    }

    console.log(results[0])

});
    
 */





// Create a MySQL pool
///const pool = mysql.createPool(connection);

// Export the pool
module.exports = connection;


//connection.end();