
# Liri-Node-App
LIRI is a command line node app that takes in parameters and gives you back data. LIRI is an app like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface.


# Overview
LIRI is a useful multi-part informational application that works in the terminal using node.js to search for upcoming concert venues and dates for artists in musical bands, songs, movies, and finally a search call a  computer-generated search whose command is pulled from a random text file that a user can change.

# Liri-Node-App uses:

• Node-Spotify-API

• OMDB-API

• Axios - grabs data from the OMDB API and the Bands In Town API

• Moment

• Request

• DotEnv

APIs

• Bands in Town

• OMDB





# Link to GitHub repository.![GitHub Logo]
https://shannonruder.github.io/liri-node-app/.

# Directions for use:

1. Open your terminal such as Bash.

2. Navigate to the folder that contains the liri.js file.

3. Depending on the command you run, the output will vary.



4. run with node.js typing into the terminal: node liri <liriReturn1> <liriReturn2>

<liriReturn1> can be:

• concert-this

• spotify-this-song

• movie-this

• do-what-it-says



# concert-this

Example 1: Run the concert-this command

node liri.js concert-this <artist/band name here>

searches for the <liriReturn2> in Bands in Town Artist Events API and renders the following information about each event to the terminal:

Name of the venue
Venue location
Date of the Event (uses moment to format date as "MM/DD/YYYY")

Output: The system will display a list of all events and locations where the artist or band will perform. It can result in multiple records. The system will also log all the results in the log.txt file. See screen-shots for each case below:


# spotify-this-song

searches for the <liriReturn2> in Bands in Town Artist Events API and renders the following information about each event to the terminal:

Artist/Band(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
and If there is no <liriReturn2> then program will default to "The Sign" by Ace of Base.

# movie-this

searches for the <liriReturn2> in theOMDB API and renders the following information about each event to the terminal:

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Rotten Tomatoes Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
and If there is no <liriReturn2> then program will default to the movie 'Mr. Nobody.'

# do-what-it-says

reads the random.txt and uses first string as <liriReturn1> and second string (separated by ,) as <liriReturn2>:

returns value depending on <liriReturn1> and <liriReturn2>.


# Screenshots:


concert-this ![GitHub Logo](/images/concertthis.png)
Format: ![screenshot of concert-this](https://shannonruder.github.io/liri-node-app/images/concertthis.png)


spotify-this-song  ![GitHub Logo](/images/sts.png)
Format: ![screenshot of spotify-this-song](https://shannonruder.github.io/liri-node-app/images/sts.png)
Format: ![screenshot of spotify-this-song](https://shannonruder.github.io/liri-node-app/images/sts2.png)

movie-this  ![GitHub Logo](/images/mt.png)
Format: ![screenshot of movie-this](https://shannonruder.github.io/liri-node-app/images/mt.png)

do-what-it-says ![GitHub Logo](/images/dwis.png)
Format: ![screenshot of do-what-it-says](https://shannonruder.github.io/liri-node-app/images/dwis.png)

# Technologies Used
Git
GitHub
Javascript
Nodejs
Node packages:
Node-Spotify-API
Request
Moment
DotEnv
APIs used:
Bands in Town
OMDB

=======

