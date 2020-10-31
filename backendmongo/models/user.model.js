
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
const userSchema = new Schema({
    username: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
        minlength: 3


    },
},{
    timestamps: true,


});

/**
 *  Our user will follow the userSchema
 */
const User = mongoose.model('User', userSchema);

/**
 *  Export our User model 
 */

 module.exports = User;