import React, { useState } from "react";
import SearchSong from "./SearchSong";
import SpotifySongs from "./SpotifySongs";
import Playlist from "./Playlist";
import SelectedSearch from "./SelectedSearch"; // Importing the new component

function CreatePlaylist() {
  const [spotifySearch, setSpotifySearch] = useState("");
  const [showSpotifySongs, setShowSpotifySongs] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [playlistSong, setPlaylistSong] = useState("");

  return (
    <>
      <SearchSong
        setSpotifySearch={setSpotifySearch}
        setShowSpotifySongs={setShowSpotifySongs}
        setShowPlaylist={setShowPlaylist}
      />
      {showSpotifySongs && !showPlaylist && (
        <SpotifySongs
          spotifySong={spotifySearch}
          setShowPlaylist={setShowPlaylist}
          setPlaylistSong={setPlaylistSong}
        />
      )}
      {showPlaylist && <SelectedSearch songName={playlistSong} />}
      {showPlaylist && <Playlist songName={playlistSong} />}
    </>
  );
}

export default CreatePlaylist;
