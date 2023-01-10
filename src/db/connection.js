require('dotenv').config();
// This imports the .env 'enviroment variables' library which allows us to store our login details securely in the .env files. It also runs the config method to make the variable available immediately.
const { MongoClient } = require("mongodb");
//This imports the MongoClient method from MongoDB which allows to open and close our connection to the database

const client = new MongoClient(process.env.MONGO_URI);
//This opens the connection to the database whose login details are contained in the enviroment variable MONGO_URI

async function connect() {
// Because we are connecting to a database we must declare the function as async
    try {
        //Always use a try catch to capture any errors and display them to the console.
        await client.connect();
        //Because this is a async function the connection must be awaited
        const db = client.db("m44MongoCLI");
        //This is the name of the database we are connecting to
        return db.collection("Movie");
        //This is the name of the Collection (think table) that will be craeted in our database
    } catch (error) {
        console.log(error);
    }
};

module.exports = {client, connect};