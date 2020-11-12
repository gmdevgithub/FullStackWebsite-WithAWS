/**
 *  What is this crap?
 * 
 *  1 We are making a connection to our DB which is in the cloud
 *  
 *  2 We are creating a Schema
 * 
 *  3 We are basically organizing our data to accept ceritan values 
 *  from the user
 * 
 *  4 the user will pass data to our backend and our backend will
 *  give it to the cloud (ATLAS)
 * 
 * /





/**
 *  Gotta tell our backend that we need a connection to mongoose
 */
const mongoose = require('mongoose');

/**
 *  Now we want to declare a new Schema as a mongoose Schema
 *  which is similar to a relational table
 */
const Schema = mongoose.Schema;

/**
 *  Similary to SQL we have a Schema which tells us that we have 
 *  a user, thats required, and must be unique.
 * 
 *  Trim will trim whitespace off the user input
 * 
 *  Username must be at least 3 characters
 * 
 *  Time stamps keeps track of what time it was modified 
 * 
 */
const exerciseShema = new Schema({

    username: { type: String, required: true },
    description: {type: String, required: true },
    duration: {type: Number, required: true },
    date: {type: Date, required: true },
     
},{
    timestamps: true,


});

/**
 *  Our Exercise will follow the exerciseShema
 */
const Exercise = mongoose.model('Exercise', exerciseShema);

/**
 *  Export our Exercise
 */

 module.exports = Exercise;