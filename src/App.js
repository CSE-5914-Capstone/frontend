import './App.css';
// import SearchBar from './components/SearchBar'
import { Box, Container, InputBase, Paper, Typography, IconButton, TextField, Grid } from '@material-ui/core';
import SearchBar from "material-ui-search-bar"
import SearchIcon from "@material-ui/icons/Search"
import axios from 'axios'
import React, { useState } from 'react';
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
  const [searchValue, setSearchValue] = useState("")
  
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
  
  const onSearch = (search) => {
    console.log(search)
    let result = {}
    axios.get("http://localhost:3000/playlist-from-song").then((response) => {
      console.log(response.data)
      let data = response.data
      data.map((song) => {
        if (song["track_name"].toLowerCase().includes(search.toLowerCase())) {
          result = song
        }
      })
      console.log(result)
      setSearchValue("")
      return result
    })
  }

  const onChange = (change) => {
    console.log("onChange")
    setSearchValue(change)
  }
  
  return (
    <Container className='app-container'>
      <Container className='center-text'>
        <Typography variant='h3'>
          Melody Miners
        </Typography>
      </Container>
      <Container>
        <SearchBar
          value={searchValue}
          onChange={(change) => onChange(change)}
          onRequestSearch={(searchTerm) => onSearch(searchTerm)}
        />
      </Container>
      <Container>
        <Typography variant="h4" gutterBottom>
          Number of Songs: {numSongs}
        </Typography>
      </Container>
      <Container>
        <TextField
          type="number"
          value={numSongs}
          onChange={handleNumSongsChange}
          variant="outlined"
          fullWidth
          margin="normal"
          inputProps={{ style: { fontSize: 20, textAlign: 'center' } }}
        />
      </Container>
      <Container>
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
    </Container>
  );
}

export default App;