class Movie {
    constructor (inputTitle, inputActor = "Not specified", inputDirector = "Not Specified") {
        this.title = inputTitle;
        //this assigns the inputTitle parameter to object we are creating
        this.actor = inputActor;
        //this assigns the inputActor parameter to object we are creating
        this.director = inputDirector;
        //this assigns the inputDirector parameter to object we are creating
    };
    async create (movieCollection) {
        // note we need to pass through the database we are going to insert into
        console.log("Entering add within index.js");
        //for debugging purposes only
        await movieCollection.insertOne(this);
        //insertOne is the method that actually inserts the movie object into our collection in the database that we were passed (movieCollection)
    };
};

module.exports = Movie;