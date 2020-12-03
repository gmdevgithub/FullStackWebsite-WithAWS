const awsconnection = require('../backendAWS/AWSconnection.js');


const axios = require('axios');






exports.getquotes = function (req,res)
{

    let statment =  'USE csci467;';


    awsconnection.query(statment, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }

        console.log(results)


    });

    let statment3 = 'SELECT * FROM Quote;';


    awsconnection.query(statment3, [2, 1], (err,results)=>
    {
        if (err) {console.log(err.message);
            res.send();}
        else {res.send(results);}

    })
}

