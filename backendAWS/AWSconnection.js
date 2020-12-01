var mysql = require('mysql');





var connection = mysql.createConnection({
    
  
  host     : process.env.RDS_HOSTNAME = "db-niu.cv418tv6s0pc.us-east-2.rds.amazonaws.com",
  user     : process.env.RDS_USERNAME = "NIUadmin",
  password : process.env.RDS_PASSWORD = "467niucsci",
  port     : process.env.RDS_PORT      = "5001"
});







var conn = false;




connection.connect(function(err){
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        conn=false;
        return;
      }

    conn=true;
    console.log('Connected to amazon database.');
    
   
   
});




let databases = 'SHOW DATABASES;';
let statment =  'USE csci467;';
let statment2 = 'SHOW TABLES;';
let statment3 = 'SELECT * FROM Quote;';
let insertstuff = "INSERT INTO Quote( partnumber,customernumber,firstname,city,street,contact,quote,price,descriptions,discount,secretnote,email, sanctioned) VALUES ( 1, 1, 'Jimbo', 'Chicago', 'Sesame St', '000-000-0000', 'duh', 10.00, 'I will be Jimbo', 1.50, 'ssshhhh its a secret', 'Jimbo@email.com', 0);";
console.log(" Query is " + databases);
console.log(" Query is " + statment);
console.log(" Query is " + statment2);
console.log(" Query is " + statment3);
console.log(" Query is " + insertstuff);


connection.query(databases,  (err, results, fields) => 
{
    if (err) 
    {
        return console.error(err.message);
    }

    console.log(results[0])

    console.log(results[1])

    console.log(results[2])
  

});
    
connection.query(statment,  (err, results, fields) => 
{
    if (err) 
    {
        return console.error(err.message);
    }

    console.log(results[0])
  

});

connection.query(statment2,  (err, results, fields) => 
{
    if (err) 
    {
        return console.error(err.message);
    }

    console.log(results[0])

    console.log(results[1])

    console.log(results[2])
  

});






connection.query(insertstuff,  (err, results, fields) => 
{
    if (err) 
    {
        return console.error(err.message);
    }

    console.log(results)
  

});



connection.query(statment3,  (err, results, fields) => 
{
    if (err) 
    {
        return console.error(err.message);
    }

    console.log(results)
  

});




connection.end();







    



