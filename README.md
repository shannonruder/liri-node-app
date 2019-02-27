
# liri-node-app

**Creator**: `Shannon Ruder`

**Created on**: `Feb 26 2019`

- - -

## Overview


LIRI is a Language Interpretation and Recognition Interface.LIRI is an app like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. Liri-Node-App is a command line node app that takes in parameters and gives you back data. 


LIRI is an application that works in the terminal/bash window using node(using axios,fs, and require) to search for upcoming concert venues and dates for artists in musical bands, songs, movies, and finally a computer-generated search whose command is pulled from a text file that a user can change.

- - -

## HOW TO USE LIRI
### **Video Guide**

Watch the video here: https://drive.google.com/file/d/1rT4qbvQoZnfuvI2KZXd_XE3xHcxFMZR9/view

- - -

## About the App

The user has the option of using four commands `<liriReturn1>` (listed below) in conjunction with specific parameters `<liriReturn2>`associated with the commands. The  `<liriReturn1>` are:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

- - -

## Directions for use:

1. Clone the repository to your local drive. 

2. Run npm install

3. Open your terminal such as Bash.

4. Navigate to the folder that contains the liri.js file.

5. Depending on the command you run, the output will vary.

    run with node.js typing into the terminal: 
    
    
                node liri <liriReturn1> <liriReturn2>


## concert-this

Example 1: Run the concert-this command

        `node liri.js concert-this <artist/band name here>`

The artist/band name typed in is defined as `<liriReturn2>`. The `concert-this`
    
        searches for the <liriReturn2> in Bands in Town Artist Events API and renders the following information about each             event to the terminal:

            * Name of the venue
            * Venue location
            * Date of the Event (uses moment to format date as "MM/DD/YYYY")

Output: The system will display a list of all events and locations where the artist or band will perform. It can result in multiple records. The system will also log all the results in the log.txt file. See screen-shots for each case below:


## spotify-this-song

Example 2: Run the `spotify-this-song` command

        `node liri.js spotify-this-song '<song name here>'`

The song name typed in is defined as `<liriReturn2>`. The `spotify-this-song`

        searches for the <liriReturn2> in Node-Spotify-API and renders the following information about each 
        song name to the terminal:

            * Artist/Band(s)
            * The song's name
            * A preview link of the song from Spotify
            * The album that the song is from

and If there is no `<liriReturn2>` then program will default to "The Sign" by Ace of Base.

## movie-this

Example 3: Run the `movie-this` command

        `node liri.js movie-this '<movie name here>'`
        
The movie name argument in is defined as `<liriReturn2>`. The `movie-this`

searches for the `<liriReturn2>` in the OMDB API and renders the following information about each event to the terminal:

            * Title of the movie.
            * Year the movie came out.
            * IMDB Rating of the movie.
            * Rotten Tomatoes Rating of the movie.
            * Country where the movie was produced.
            * Language of the movie.
            * Plot of the movie.
            * Actors in the movie.


and If there is no `<liriReturn2>` then program will default to the movie 'Mr. Nobody.'

## do-what-it-says

Example 4: Run the `do-what-it-says` command

reads the random.txt and uses first string as `<liriReturn1>` and second string (separated by ,) as `<liriReturn2>`:

returns value depending on `<liriReturn1>` and `<liriReturn2>`.

## Technologies used

   * Git

   * GitHub

   * Javascript

   * Node.js

• Node packages:

   * `[Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)`
   * `Request`
   * `Moment`
   * `DotEnv`
   * `Axios`
    
   * APIs used:
        * [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
        * [OMDB API](http://www.omdbapi.com)

- - -

## Link to GitHub repository.

    • [liri-node-app github repo](https://shannonruder.github.io/liri-node-app/)

- - -



## Screenshots:


concert-this
Format: ![screenshot of concert-this](https://shannonruder.github.io/liri-node-app/images/concertthis.png)


spotify-this-song 
Format: ![screenshot of spotify-this-song](https://shannonruder.github.io/liri-node-app/images/sts.png)
Format: ![screenshot of spotify-this-song](https://shannonruder.github.io/liri-node-app/images/sts2.png)

movie-this  
Format: ![screenshot of movie-this](https://shannonruder.github.io/liri-node-app/images/mt.png)

do-what-it-says (/images/dwis.png)
Format: ![screenshot of do-what-it-says](https://shannonruder.github.io/liri-node-app/images/dwis.png)



