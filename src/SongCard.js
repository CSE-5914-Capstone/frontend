// SongCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const SongCard = ({ song, cardStyle }) => {
  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography variant="h6">{song.name}</Typography>
        <Typography variant="subtitle1">Artist: {song.artist}</Typography>
        <Typography variant="subtitle1">Genre: {song.genre}</Typography>
        <Typography variant="subtitle1">BPM: {song.bpm}</Typography>
      </CardContent>
    </Card>
  );
};

export default SongCard;
