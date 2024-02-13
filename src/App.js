import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { IconButton, InputBase, Typography, TextField, Grid, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SongCard from './SongCard';

function generateRandomSong() {
  // Function to generate a random song
  const genres = ['Pop', 'Rock', 'Electronic', 'Hip-Hop', 'Country'];
  const bpm = Math.floor(Math.random() * (180 - 80 + 1) + 80); // Random BPM between 80 and 180

  return {
    name: `Random Song ${Math.floor(Math.random() * 1000)}`,
    artist: `Random Artist ${Math.floor(Math.random() * 1000)}`,
    genre: genres[Math.floor(Math.random() * genres.length)],
    bpm,
  };
}

function getRandomColor() {
  // Function to generate a random color
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {
  const [numSongs, setNumSongs] = useState(5); // Default number of songs to display
  const [songs, setSongs] = useState(Array.from({ length: numSongs }, generateRandomSong));
  const [songColors, setSongColors] = useState(Array.from({ length: numSongs }, () => getRandomColor()));

  const handleSearch = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
  };

  const handleNumSongsChange = (event) => {
    // Update the number of songs to display
    const newNumSongs = parseInt(event.target.value, 10);
    setNumSongs(newNumSongs);

    // Generate a new list of random songs and colors based on the updated number
    const newSongs = Array.from({ length: newNumSongs }, (_, index) => {
      if (index < numSongs) {
        return songs[index]; // Keep existing songs unchanged
      } else {
        return generateRandomSong(); // Generate new songs for added slots
      }
    });
    const newSongColors = Array.from({ length: newNumSongs }, (_, index) => {
      if (index < numSongs) {
        return songColors[index]; // Keep existing colors unchanged
      } else {
        return getRandomColor(); // Generate new colors for added slots
      }
    });

    setSongs(newSongs);
    setSongColors(newSongColors);
  };

  return (
    <Container>
      <Paper component="form" onSubmit={handleSearch}>
        <InputBase placeholder="Search" />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      {/* Title for the number of songs */}
      <Typography variant="h4" gutterBottom>
        Number of Songs: {numSongs}
      </Typography>

      {/* Larger input field for the number of songs */}
      <TextField
        type="number"
        value={numSongs}
        onChange={handleNumSongsChange}
        variant="outlined"
        fullWidth
        margin="normal"
        inputProps={{ style: { fontSize: 20, textAlign: 'center' } }}
      />

      {/* Display multiple SongCard components in a grid layout */}
      <Grid container spacing={2}>
        {songs.map((song, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SongCard
              song={song}
              cardStyle={{ backgroundColor: songColors[index] }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
