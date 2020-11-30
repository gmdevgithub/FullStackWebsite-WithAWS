var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : process.env.RDS_Amazon,
    user     : process.env.RDS_Admin,
    password : process.env.RDS_Jerry0511,
    port     : process.env.RDS_5001
});

connection.connect(function(err) {
    
    if(err){
        console.error('Database connection failed' + err.stack) 
        return;
    }

 console.log('Connected to database.');
});

connection.end();

