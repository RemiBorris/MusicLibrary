const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////
const returnPlaylists = function(libraryData) { 
       const returnedPlaylist = libraryData.playlists;
       return returnedPlaylist
};

const returnTracks = function(libraryData) {
       const returnedTracks = libraryData.tracks;
       return returnedTracks
};

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function(libraryData) {
       const playlists = returnPlaylists(libraryData);
       for (const playlist in playlists) {
              console.log(`${playlist}: ${playlists[playlist].name} - ${playlists[playlist].tracks.length} tracks`)
       }
};

// printPlaylists(library);

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function(libraryData) {
       const tracks = returnTracks(libraryData);
       for (const track in tracks) {
              console.log(`${track}: ${tracks[track].name} by ${tracks[track].artist} (${tracks[track].album})`)
       }
};

// printTracks(library);

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId, libraryData) {
       const playlist = returnPlaylists(libraryData)[playlistId]
       const playlistTracks = playlist.tracks
       console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`)
       for (const track of playlistTracks) {
              console.log(`${track}: ${libraryData.tracks[track].name} by ${libraryData.tracks[track].artist} (${libraryData.tracks[track].album})`)
       }
};

// printPlaylist("p01", library);
// printPlaylist("p02", library);

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {

}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {

}


// adds a playlist to the library
const addPlaylist = function(name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}