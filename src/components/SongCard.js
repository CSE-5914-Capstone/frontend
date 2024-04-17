import React, { useState } from 'react';
import { Button, Card, CardContent, CardActions, Typography, makeStyles } from '@material-ui/core';
import CreatePlaylistPopup from './CreatePlaylistPopup';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  iframeContainer: {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%', // Aspect ratio 16:9
    overflow: 'hidden',
    borderRadius: theme.spacing(1),
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: theme.spacing(1),
  },
}));

const SongCard = ({ song, includeButton, setShowPlaylist, setSelectedSong, setDanceability, setEnergy, setLoudness, setLiveness, setValence, setTempo }) => {
  const classes = useStyles();
  const [popupOpen, setPopupOpen] = useState(false);
  const userParamsLabels = ["Danceability", "Energy", "Loudness", "Liveness", "Valence", "Tempo"];
  const paramSetFunctions = [setDanceability, setEnergy, setLoudness, setLiveness, setValence, setTempo];

  const resetSetFunctions = () => {
    // Set all set functions to null
    paramSetFunctions.forEach(func => func(null));
  };

  const onSubmit = (event) => {
    setShowPlaylist(true);
    setSelectedSong(song);
  };

  return (
    <Card className={classes.card}>
      <div className={classes.iframeContainer}>
        <iframe
          className={classes.iframe}
          src={`https://open.spotify.com/embed/track/${song.track_id}`}
          title={song.name}
          allow="encrypted-media"
        ></iframe>
      </div>
      {includeButton && (
        <CardActions>
          <Button
            variant="outlined"
            onClick={() => {
              resetSetFunctions(); // Call the reset function before opening the popup
              setPopupOpen(true);
            }}
          >
            Create Playlist
          </Button>
        </CardActions>
      )}
      <CreatePlaylistPopup
        open={popupOpen}
        setOpen={setPopupOpen}
        onSubmit={onSubmit}
        userParams={userParamsLabels}
        setFunctions={paramSetFunctions}
      />
    </Card>
  );
};

export default SongCard;
