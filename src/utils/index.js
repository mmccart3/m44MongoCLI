class Movie {
    constructor (inputTitle, inputActor = "Not specified", inputDirector = "Not Specified") {
        this.title = inputTitle;
        this.actor = inputActor;
        this.director = inputDirector;
    };
    add () {
        console.log("Entering add within index.js");
        //code to save a movie to the database here;
    };
};

module.exports = Movie;