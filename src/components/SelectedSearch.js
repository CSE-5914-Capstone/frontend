import React from 'react';
import { Card, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';

//can add more selections besides just song

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
    height: 150,
    objectFit: 'cover',
  },
}));

const SelectedSearch = ({ song }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={song.albumImage}
        title={song.name}
      />
      <div className={classes.content}>
        <CardContent>
          <Typography component="h5" variant="h5">
            {song.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Artist: {song.artist}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Genre: {song.genre}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            BPM: {song.bpm}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default SelectedSearch;
