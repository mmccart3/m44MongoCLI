const {client,connect} = require("./db/connection");
const yargs = require('yargs');
const Movie = require('./utils/index');

async function app(yargsObject) {
    const movieCollection = await connect();
    if (yargsObject.create) {
        // code to create a movie goes here
        console.log("Entering create");
        const newMovie = new Movie (yargsObject.title, yargsObject.actor, yargsObject.director);
        await newMovie.create(movieCollection);
    } else if (yargsObject.update) {
        //code to update the actor or director in a movie updateOne
        console.log("Entering update");
    } else if (yargsObject.read) {
        //code to list all movies goes here using find({})
        console.log("entering read");
    } else if (yargsObject.delete) {
        //code to delete a movie will go here deleteOne
        console.log("entering delete");
    } else {
        console.log("Command not recognised")
    };
    await client.close();
};

app(yargs.argv);