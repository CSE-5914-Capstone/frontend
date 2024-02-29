// SongCard.js
import React from 'react';
import { Button } from '@material-ui/core';
import { useState } from "react"

const SongCard = ({ song, cardStyle, button, setShowPlaylist, setPlaylistSong}) => {
  return (
    <div style={cardStyle}>
      <h3>{song.name}</h3>
      <p>Artist: {song.artist}</p>
      <p>Genre: {song.genre}</p>
      <p>BPM: {song.bpm}</p>
      {button &&
        <Button
        variant = "outlined"
        onClick={() => {
          setShowPlaylist(true)
          setPlaylistSong(song.name)
        }}
      >
        Create Playlist
      </Button>
      }
    </div>
  );
};

export default SongCard;
