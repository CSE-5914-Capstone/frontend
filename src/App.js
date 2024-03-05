import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, makeStyles, Paper } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import axios from 'axios';
import SongCard from './SongCard';
// import RequestText from './components/RequestText';
import GetData from './components/Api';

const useStyles = makeStyles((theme) => ({
  appContainer: {
    padding: theme.spacing(4),
  },
  centerText: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
  searchBar: {
    border: '2px solid black',
    borderRadius: theme.spacing(1),
  },
  searchBarContainer: {
    marginBottom: theme.spacing(3),
    textAlign: 'center', // Center the search bar
  },
  songCount: {
    textAlign: 'center', // Center the text
    marginBottom: theme.spacing(2),
  },
  songCardContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  songCard: {
    width: 300,
    height: 400,
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    marginBottom: 0,
    marginRight: 0,
    border: '4px solid black',
    borderRadius: theme.spacing(1),
    boxShadow: '8px 8px 8px rgba(0, 0, 0, 0.1), -8px -8px 8px rgba(0, 0, 0, 0.1)',
  },
}));

function getRandomColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function App() {
  const classes = useStyles();
  const [songs, setSongs] = useState([]);
  const [originalColors, setOriginalColors] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [songList, setSongList] = useState("")

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = () => {
    axios.get("http://localhost:3000/playlist-from-song")
      .then((response) => {
        let data = response.data;
        let searchResults = [];

        if (Array.isArray(data)) {
          data.forEach((song) => {
            searchResults.push({
              name: song["track_name"],
              artist: song["track_artist"],
              genre: song["playlist_genre"],
              bpm: Math.round(song["tempo"]),
            });
          });
        }

        setSongs(searchResults);
        setOriginalColors(Array(searchResults.length).fill().map(getRandomColor));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const onSearch = (search) => {
    let searchResults = [];

    songs.forEach((song, index) => {
      if (song.name.toLowerCase().includes(search.toLowerCase())) {
        searchResults.push(song);
      }
    });

    setSongs(searchResults);
    setSearchValue("");
  };

  const onChange = (change) => {
    setSearchValue(change);
  };

  return (
    <Container className={classes.appContainer}>
      <div className={classes.centerText}>
        <Typography variant='h3'>
          Melody Miners
        </Typography>
      </div>
      <div className={classes.searchBarContainer}>
        <SearchBar
          className={classes.searchBar}
          value={searchValue}
          onChange={(change) => onChange(change)}
          onRequestSearch={(searchTerm) => onSearch(searchTerm)}
        />
      </div>
      <div className={classes.songCount}>
        <Typography variant="h4" gutterBottom>
          Number of Songs: {songs.length}
        </Typography>
      </div>
      <div className={classes.songCardContainer}>
        <Grid container spacing={4}>
          {songs.map((song, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper className={classes.songCard} style={{ backgroundColor: originalColors[index] }}>
                <SongCard
                  song={song}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      {/* <p>{GetData().then(res =>(this.setState(res)))}</p> */}
      </div>
    </Container>
  );
}

export default App;
