const {client,connect} = require("./db/connection");
//This imports the connect method which opens a connection to our actual database and the client method which allows us to close the connection to our database
const yargs = require('yargs');
//This imports the Yargs NPM library which gives allows us to use '--' on the command line
const Movie = require('./utils/index');
//This imports the movie class of objects.

async function app(yargsObject) {
    const movieCollection = await connect();
    // This creates the connection to our database. From here on in, 'movieCollection' refers to our actual database collection
    if (yargsObject.create) {
        // code to create a movie goes here
        console.log("Entering create");
        //for debugging purposes only
        const newMovie = new Movie (yargsObject.title, yargsObject.actor, yargsObject.director);
        //This creates a movie object with the title and actor and director details typed in the CLI
        await newMovie.create(movieCollection);
        //This runs the create method we created in the movie object class in index.js
    } else if (yargsObject.updateActor) {
        //code to update the actor or director in a movie updateOne
        console.log("Entering update");
        const query = {title: yargsObject.title};
        const update = {$set: { actor: yargsObject.actor}};
        const result = await movieCollection.updateOne(query,update);
        if (result.modifiedCount === 1) {
            console.log ("actor updated succesfully");
        } else {
            console.log ("updatye not successful");
        }
    } 
    else if (yargsObject.updateDirector) {
        //code to update the actor or director in a movie updateOne
        console.log("Entering update");
        const query = {title: yargsObject.title};
        const update = {$set: { director: yargsObject.director}};
        const result = await movieCollection.updateOne(query,update);
        if (result.modifiedCount === 1) {
            console.log ("actor updated succesfully");
        } else {
            console.log ("update not successful");
        }
    }else if (yargsObject.read) {
        //code to list all movies goes here using find({})
        console.log("entering read");
        const results = await movieCollection.find({}).toArray();
        console.table (results);

    } else if (yargsObject.delete) {
        //code to delete a movie will go here deleteOne
        console.log("entering delete");
        const query = {title: yargsObject.title};
        const result = await movieCollection.deleteOne(query);
        // console.log (result);
        if (result.deletedCount === 1) {
            console.log("Movie successfully deleted");
        } else {
            console.log ("movie not deleted");
        }
    } else {
        console.log("Command not recognised")
    };
    await client.close();
};

app(yargs.argv);