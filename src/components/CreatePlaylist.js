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
  const [dancebility, setDanceability] = useState(null)
  const [energy, setEnergy] = useState(null)
  const [loudness, setLoudness] = useState(null)
  const [liveness, setLiveness] = useState(null)
  const [valence, setValence] = useState(null)
  const [tempo, setTempo] = useState(null)

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
          /** TODO Pass set functions here */
        />
      )}
      {showPlaylist && selectedSong && (
        <SelectedSearch song={selectedSong} />
      )}
      {showPlaylist && 
        <Playlist 
          songName={selectedSong.name}
          danceability={dancebility}
          energy={energy}
          loudness={loudness}
          liveness={liveness}
          valence={valence}
          tempo={tempo}
        />
      }
    </>
  );
}

export default CreatePlaylist;
