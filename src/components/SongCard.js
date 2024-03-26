import React from 'react';
import { Button, Card, CardContent, CardActions, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300, // Adjust the maximum width of the card as needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '100%', // Allow the title to take the full width
    marginBottom: theme.spacing(1),
  },
  text: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '100%', // Allow the text to take the full width
    marginBottom: theme.spacing(0.5), // Add margin to separate each text
  },
}));

const SongCard = ({ song, includeButton, setShowPlaylist, setSelectedSong }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {song.albumImage ? (
        <img src={song.albumImage} alt="Album Art" className={classes.image} />
      ) : (
        <div className={classes.image} style={{ backgroundColor: '#ccc', width: '200px', height: '200px' }} />
      )}
      <CardContent style={{ width: '100%' }}> {/* Ensure content takes full width */}
        <Typography variant="h6" component="h3" className={classes.title}>
          {song.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
          Artist: {song.artist}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
          Genre: {song.genre}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          BPM: {song.bpm}
        </Typography>
      </CardContent>
      {includeButton && (
        <CardActions>
          <Button
            variant="outlined"
            onClick={() => {
              setShowPlaylist(true);
              setSelectedSong(song);
            }}
          >
            Create Playlist
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default SongCard;
