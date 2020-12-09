const legacyconnection = require('../backendAWS/Legacyconnection.js');


const axios = require('axios');


exports.getcustomers = function (req,res)
{

    let statment =  'USE csci467;';


    legacyconnection.query(statment, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }

        console.log(results)


    });


    let statment2 = 'SELECT * FROM customers';


    legacyconnection.query(statment2, [2, 1], (err,results)=>
    {
        if (err) {console.log(err.message);
            res.send();}
        else {res.send(results);}

    })


    
}









