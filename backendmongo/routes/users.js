/**
 *  Here we define our router to use an express router
 * 
 *  The user follows the user model we defined 
 */
const router = require('express').Router();
let User = require('../models/user.model');


//************ CRUD OPERATIONS ************************ */

/**
 *  GET ( OUTGOING API ENDPONT TO FRONTEND )
 * 
 *  This is our home route (API ENDPOINT), 
 *  it will http: GET all data and return it as JSON
 * 
 *  Notice it uses a member method .find() to see if the user
 *  exists in our database, if it does then we request its data
 * 
 *  Find will return a promise
 * 
 */
router.route('/').get((req, res) => {
    User.find()
        .then( users => res.json( users))
        .catch(err => res.status(400).json('Error you darn goofed: ' + err));

});

/**
 *  POST ( INCOMING API ENDPONT TO FRONTEND )
 * 
 *  This is our add route to add a new user to our DB
 *  It uses the POST http method to send JSON to our backend
 *  
 *  It will respond with a message 
 * 
 *  Notice it creates a new user object and then uses .save()
 *  in order to save the new user 
 */
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then( () => res.json( ' User has been added'))
        .catch(err => res.status(400).json('Error you darn goofed on POST: ' + err));

});


// Just exports our router 
module.exports = router;