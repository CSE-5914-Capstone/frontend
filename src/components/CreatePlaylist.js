import React, { useState } from "react";
import SearchSong from "./SearchSong";
import SpotifySongs from "./SpotifySongs";
import Playlist from "./Playlist";
import SelectedSearch from "./SelectedSearch";

function CreatePlaylist() {
  const [spotifySearch, setSpotifySearch] = useState("");
  const [showSpotifySongs, setShowSpotifySongs] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

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
          setSelectedSong={setSelectedSong}
        />
      )}
      {showPlaylist && selectedSong && (
        <SelectedSearch song={selectedSong} />
      )}
      {showPlaylist && <Playlist songName={selectedSong.name} />}
    </>
  );
}

export default CreatePlaylist;
