class Movie {
    constructor (inputTitle, inputActor = "Not specified", inputDirector = "Not Specified") {
        this.title = inputTitle;
        this.actor = inputActor;
        this.director = inputDirector;
    };
    async create (movieCollection) {
        console.log("Entering add within index.js");
        await movieCollection.insertOne(this);
        //code to save a movie to the database here;
    };
};

module.exports = Movie;