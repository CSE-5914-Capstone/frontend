import React from 'react';
import { Grid } from '@material-ui/core';
import SongCard from './SongCard';

const SongsList = ({ songs, includeButton, setShowPlaylist, setSelectedSong, setDanceability, setEnergy, setLoudness, setLiveness, setValence, setTempo }) => {
  return (
    <Grid container spacing={2}>
      {songs.map((song, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <SongCard
            song={song}
            includeButton={includeButton}
            setShowPlaylist={setShowPlaylist}
            setSelectedSong={setSelectedSong}
            setDanceability={setDanceability}
            setEnergy={setEnergy}
            setLoudness={setLoudness}
            setLiveness={setLiveness}
            setValence={setValence}
            setTempo={setTempo}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SongsList;
