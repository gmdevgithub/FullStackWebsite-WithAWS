module.exports = function(app) 
{



    
    //var email = require('./Controller/email');

    // Load the MySQL pool connection
    const pool = require('../backendAWS/AWScontroller.js');
    // Load the MySQL pool connection
    const pool2 = require('../backendAWS/Legacycontroller.js');
      

    


    app.route('/getquoteaws')
    .get(pool.getquotes)
    app.route('/getsalesaws')
    .get(pool.getsalesinfo)
    app.route('/addaws')
    .post(pool.postquotes)
         
    app.route('/getlegacy')
    .get(pool2.getcustomers)
         
   
       
  };
  