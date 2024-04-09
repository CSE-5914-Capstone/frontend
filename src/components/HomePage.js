import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import backgroundImage from './background.jpeg'; // Adjust the path to your image file

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`, // Set the background image
    backgroundSize: 'cover', // Cover the entire container
    backgroundPosition: 'center', // Center the background image
    color: theme.palette.common.white, // Text color
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  icon: {
    fontSize: 100,
    color: theme.palette.primary.main,
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title} style={{ marginTop: '400px' }}>
        A new way to find music.
      </Typography>
      {/* Additional content */}
      <Typography variant="body1" style={{ marginTop: '25px' }}>
      Discover your next favorite tune with our song recommendation app. 
      </Typography>
      <Typography variant="body1" style={{ marginTop: '10px' }}>
      Simply search for a song, and instantly receive a curated playlist of similar tracks, tailored to your musical taste!
      </Typography>
    </div>
  );
}

export default HomePage;
