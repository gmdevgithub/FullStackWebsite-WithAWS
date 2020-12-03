const legacyconnection = require('../backendAWS/Legacyconnection.js');


const axios = require('axios');


exports.getcustomers = function (req,res)
{

    let statment = 'SELECT * FROM customers';


    legacyconnection.query(statment, (err,results)=>
    {
        if (err) {console.log(err.message);
            res.send();}
        else {res.send(results);}

    })
}








