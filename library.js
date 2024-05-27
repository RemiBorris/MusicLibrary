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
const returnPlaylists = function() { 
       const returnedPlaylist = library.playlists;
       return returnedPlaylist
};

const returnTracks = function() {
       const returnedTracks = library.tracks;
       return returnedTracks
};

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
       const playlists = returnPlaylists(library);
       for (const playlist in playlists) {
              console.log(`${playlist}: ${playlists[playlist].name} - ${playlists[playlist].tracks.length} tracks`)
       }
};

// printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
       const tracks = returnTracks(library);
       for (const track in tracks) {
              console.log(`${track}: ${tracks[track].name} by ${tracks[track].artist} (${tracks[track].album})`)
       }
};

// printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId ) {
       const playlist = returnPlaylists(library)[playlistId]
       const playlistTracks = playlist.tracks
       console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`)
       for (const track of playlistTracks) {
              console.log(`${track}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`)
       }
};

// printPlaylist("p01");
// printPlaylist("p02");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       if (library.playlists[playlistId] && library.tracks[trackId]) {
       // if (!library.playlists[playlistId].tracks.includes(trackId)) {
              library.playlists[playlistId].tracks.push(trackId)
       // }
       }
}

// console.log(library.playlists);
// addTrackToPlaylist('t03', 'p01');
// console.log(library.playlists);

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
       const trackID = generateUid();
       library.tracks[trackID] = {
              'id': trackID,
              'name': name,
              'artist': artist,
              'album': album
       }
};

// console.log(library)
// addTrack('Get Low', 'Lil Jon', 'Kigns of Crunk')
// console.log(library)


// adds a playlist to the library
const addPlaylist = function(name) {
       const playlistID = generateUid();
       library.playlists[playlistID] = {
              'id': playlistID,
              'name': name,
              'tracks': []
       }
}
console.log(library)
addPlaylist('Workout')
console.log(library)

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}