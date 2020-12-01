var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME = "db-niu.cv418tv6s0pc.us-east-2.rds.amazonaws.com",
  user     : process.env.RDS_USERNAME = "NIUadmin",
  password : process.env.RDS_PASSWORD = "467niucsci",
  port     : process.env.RDS_PORT      = "5001"
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();