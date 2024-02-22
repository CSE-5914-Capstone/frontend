// SongCard.js
import React from 'react';

const SongCard = ({ song, cardStyle }) => {
  return (
    <div style={cardStyle}>
      <h3>{song.name}</h3>
      <p>Artist: {song.artist}</p>
      <p>Genre: {song.genre}</p>
      <p>BPM: {song.bpm}</p>
    </div>
  );
};

export default SongCard;
