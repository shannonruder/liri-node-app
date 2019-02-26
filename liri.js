
// >>>>>>>>>>>>>>>>>>>> Read and set environment variables >>>>>>>>>>>>>>>>>>>>
require("dotenv").config();


// >>>>>>>>>>>>>>>>>>>> Project variables  >>>>>>>>>>>>>>>>>>>>
var fs = require("fs");
var request = require('request');
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var Spotify1 = new Spotify(keys.spotify);
var moment = require('moment');
var time = moment().format('HH:mm:ss');
var axios = require("axios");



//  >>>>>>>>>>>>>>>>>>>> Grabs the command from the terminal  >>>>>>>>>>>>>>>>>>>>

var liriReturn1 = process.argv[2];
var liriReturn2 = process.argv[3];
var logTxt = 'command log at: ' + time + '. Params: ' + liriReturn1+ '; ' + liriReturn2 + '; \n';




// <<<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>> Main Switch Case >>>>>>>>>>>>>>>>>>>>  >>>>>>>>>>>>>>>>>>>>

function command(arg){

    switch(arg) {
      case 'concert-this': {
        if (!liriReturn2) liriReturn2 = "Maroon 5";
        searchBands(liriReturn2);
        break;
      }
      case 'spotify-this-song': {
        searchSong(liriReturn2);
        break;
      }
      case 'movie-this': {
        if (!liriReturn2) liriReturn2 = "Mr. Nobody";
        searchMovie(liriReturn2);
        break;
      }
      case 'do-what-it-says': {
        doWhatItSays();
        break;
      }
      default:
        console.log("\nI'm sorry, " +  liriReturn2+ " is not a command that I recognize. Please make sure you use a hyphen and try one of the following commands: \n\n 1. For a band's concert venue with upcoming dates, type: node liri.js concert-this (with a band name following) \n\n  2. For a movie title, type: node liri.js movie-this (with a movie title following) \n\n  3. For searching a song, type: node liri.js spotify-this-song (specify song title)\n Example: node liri.js spotify-this-song Candle in the Wind\n\n  4. For a random search: node liri.js do-what-it-says \n");

    }
  };


// <<<<<<<<<<<<<<<<< searchBands >>>>>>>>>>>>>>>>>>>> `concert-this` >>>>>>>>>>>>>>>>>>>>

function searchBands(arg){

  request("https://rest.bandsintown.com/artists/" + arg + "/events?app_id=codingbootcamp&date=2000-01-01%2C2018-09-09", function(error, response, body) {
    
    if (!error && response.statusCode === 200) {

  
      var data = JSON.parse(body);

      var count = 0;
      for (var i = data.length-1; i > 0; i--){
        count++;
        if (count > 10) return;

        var dateOfConcert = data[i].datetime;
        var dateOfConcertMJS = moment(dateOfConcert).format("MM/DD/YYYY");

        var result = {
          "Name of the venue: " : data[i].venue.name,
          "Venue location: " : data[i].venue.city + ', ' + data[i].venue.country,
          "Date of the Event: " : dateOfConcertMJS
        }
        console.log("_________________EVENT INFO________________");

        consoleLog(result);
        console.log("___________________________________________");

      }

    } else console.log("error", error);


  });
}

// <<<<<<<<<<<<<<<<< searchSong  >>>>>>>>>>>>>>>>>>>> `spotify-this-song` >>>>>>>>>>>>>>>>>>>>


function searchSong(arg){ 

  if (arg === undefined) arg = "Ace of Base", "The Sign";

  Spotify1.search({ type: 'track', query: arg, limit: '1'}, function(err, data) {

    log();
    
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var result = {
      "Artist name: " : data.tracks.items[0].album.artists[0].name,
      "Song name: " : data.tracks.items[0].name,
      "preview_url: " : data.tracks.items[0].preview_url,
      "Album name: " : data.tracks.items[0].album.name
    }
    console.log("_____________________________");
    consoleLog(result);
    console.log("_____________________________");
  });
}


// <<<<<<<<<<<<<<<<< searchMovie  >>>>>>>>>>>>>>>>>>>> `movie-this` >>>>>>>>>>>>>>>>>>>>

function searchMovie(arg){
  axios.get("http://www.omdbapi.com/?t=" + arg + "&y=&plot=short&apikey=trilogy").then(
  function(response) {

      var result = {
        "Title: " : response.data.Title,
        "Year: " : response.data.Year,
        "imdbRating: " : response.data.imdbRating,
        "Rotten Tomatoes Rating: " : response.data.Ratings ? response.data.Ratings[1].Value : "",
        "Country: " : response.data.Country,
        "Language: " : response.data.Language,
        "Plot: " : response.data.Plot,
        "Actors: " : response.data.Actors
      }
      console.log("_____________________________");
      
      consoleLog(result);
      console.log("_____________________________");
    },
    function(error){
      console.log("error", error);
    }
  );
}


// <<<<<<<<<<<<<<<<< searchRandom  >>>>>>>>>>>>>>>>>>>> `do-what-it-says` >>>>>>>>>>>>>>>>>>>>


function doWhatItSays(){

    fs.readFile("random.txt", "utf8", function(error, data){
      if (error) return;

      liriReturn1 = data.split(",")[0].trim();
      liriReturn2 = data.split(",")[1].trim();
      
      command(liriReturn1);
    });
}



function consoleLog(obj){
  for (var key in obj){
    console.log(key + obj[key]);
  }
}

function log(){
  fs.appendFile('./log.txt', logTxt, function (err) {
    if (err) throw err;
  });

}



command(liriReturn1);









