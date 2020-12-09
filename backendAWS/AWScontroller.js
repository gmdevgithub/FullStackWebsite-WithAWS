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









exports.getsalesinfo = function (req,res)
{

    let statment =  'USE csci467;';


    awsconnection.query(statment, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }

        console.log(results)


    });

    let statment3 = 'SELECT * FROM salesinfo;';


    awsconnection.query(statment3, [2, 1], (err,results)=>
    {
        if (err) {console.log(err.message);
            res.send();}
        else {res.send(results);}

    })
}









exports.postquotes = function(req,res)
{



    let statment =  'USE csci467;';

    awsconnection.query(statment, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }

        console.log(results)


    });



    let statment3 = 'INSERT INTO Quote( partnumber, customernumber, firstname, city, street, quote, price, descriptions , discount , secretnote, email, sanctioned ) VALUES( ?, ?, ?, ?, ?, ? , ?, ?, ?, ?, ?, ?, ? );';



    let values = [req.body.partnumber, req.body.customernumber, req.body.firstname, req.body.city , req.body.street , req.body.quote ,req.body.price  ,req.body.descriptions ,req.body.discount ,req.body.secretnote ,req.body.email ,req.body.sanctioned ]

    awsconnection.query(statment3, values, (err, results) => {
        if (err) { console.log(err.message); }
        else { res.send(results); }
    });
    
  
}







exports.putquotes = function (req,res)
{

   
}









exports.deletequotes = function (req,res)
{

    
}



