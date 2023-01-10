const {client,connect} = require("./db/connection");
const yargs = require('yargs');

function app(yargsObject) {
    if (yargsObject.create) {
        // code to create a movie goes here
        console.log("Entering create");
    } else if (yargsObject.update) {
        //code to update the actor or director in a movie
        console.log("Entering update");
    } else if (yargsObject.read) {
        //code to list all movies goes here
        console.log("entering read");
    } else if (yargsObject.delete) {
        //code to delete a movie will go here
        console.log("entering delete");
    } else {
        console.log("Command not recognised")
    }
};

app(yargs.argv);