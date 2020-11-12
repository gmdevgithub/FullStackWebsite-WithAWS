

/**
 *  Our server uses express, cors( a https thing ) , and 
 *  mongoose
 */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

/**
 *  Our configuration is set up in an env folder 
 */
require('dotenv').config();

/**
 *  We want to run the app through express and on port 
 *  5000 
 */
const app = express();
const port = process.env.PORT || 5000;

/**
 *  make sure the app is using the cors header 
 *  and will take/pass BJSON
 */
app.use(cors());
app.use(express.json());

/**
 *  Our URI given to us by ATLAS defined in the .env folder
 * 
 *  we then make a connection through mongoose with our uri,
 *  and some parameters
 *  
 *  We now have a connection 
 * 
 *  Once the connection is sucessful once we console log that
 */
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established sucessfully");
})

/**
 *  Set up our routers and define them in our routes folder
 */
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

/**
 *  Classify wich http routes will be accepted and 
 *  which routers will work for that path 
 */
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


/**
 *  The app listens on port 5000 and will remain there till 
 *  termination with ^C 
 */
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});