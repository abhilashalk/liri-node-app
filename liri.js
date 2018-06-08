// code to read and set any environment variables with the dotenv package
require('dotenv').config();
// importing keys.js file for access to keys
//var keysFile = require("./keys.js");
var keys = require("./keys.js");
var request = require('request');

// FS package for reading and writing packages
var fs = require("fs");
// NPM twitter package
var Twitter = require('twitter');
// NPM Spotify package.
var Spotify = require('node-spotify-api');
//setting variable for inputs...tweets/song/movie
var userInput = process.argv[2];

//the app takes in one of the following commands:
switch (userInput) {
    case "my-tweets": myTweets();
        break;
    case "spotify-this-song": songInfo();
        break;
    case "movie-this": getMovieInfo();
        break;
    case "do-what-it-says": doWhatItSays();
        break;

        // to grab data for movie details
        function getMovieInfo(movieTitle) {
            //setting variable for second argument
            var movieTitle = process.argv[3];
            if (!movieTitle) {
                movieTitle = "mr nobody";
            }

            request("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
                // If the request is successful (i.e. if the response status code is 200)
                if (!error && response.statusCode === 200) {
                    //print movie info in log, parsing into Json
                    console.log("Movie Title : " + JSON.parse(body).Title);
                    console.log("Release year : " + JSON.parse(body).Year);
                    console.log("IMDB rating : " + JSON.parse(body).imbdRating);
                    console.log("Rotten Tomatoes rating : " + JSON.parse(body).Ratings[1].Value);
                    console.log("Country of production : " + JSON.parse(body).Country);
                    console.log("Movie language : " + JSON.parse(body).Language);
                    console.log("Movie plot : " + JSON.parse(body).Plot);
                    console.log("Actors : " + JSON.parse(body).Actors);
                }
            });
        }

        // Function to show my last 5 tweets.
        function myTweets() {
            // var client = new twitter({
            //     consumer_key: keys.twitter.consumer_key,
            //     consumer_secret: keys.twitter.consumer_secret,
            //     access_token_key: keys.twitter.access_token_key,
            //     access_token_secret: keys.twitter.access_token_secret,
            // });
            // Passes Twitter keys to twitter api
            var client = new Twitter(keys.twitter);
            //setting variable for second argument
            var twitterUsername = process.argv[3];

            if (!twitterUsername) {
                twitterUsername = "@Unogroup1";
            }
            params = { name: twitterUsername };
            // Shows up to last  tweets and when created in terminal.
            client.get("statuses/user_timeline/", params, function (error, data, response) {
                if (!error)
                    console.log(data);
                //console.log(error);
                //console.log(response);
            })
        }


        // Function to get song info from given title
        function songInfo() {
            ///setting variable for second argument
            var songTitle = process.argv[3];
            // Passes spotify keys to spotify api
            var spotify = new Spotify(keys.spotify);

            if (!songTitle) {
                songTitle = "The sign";
            }
            params = songTitle;
            spotify.search({ type: 'track', query: params }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }
                console.log(data);
            });


        }
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        // Break the string down by comma separation and store the contents into the output array.
        var output = data.split(",");

        // Loop Through the newly created output array
        for (var i = 0; i < output.length; i++) {

            // Print each element (item) of the array/
            console.log(output[i]);
        }
    });
}
