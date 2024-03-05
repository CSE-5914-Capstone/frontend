import React, { useState, useEffect } from 'react';
import { Container, Typography, makeStyles, AppBar, Tabs, Tab, Paper, Grid, Button } from '@material-ui/core';
import axios from 'axios';

import SearchSongs from './SearchSongs';
import SongsList from './SongsList';

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function TabPanel({ value, index, children }) {
  return (
    <Container role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`}>
      {value === index && (
        children
      )}
    </Container>
  );
}

function App() {
  const classes = useStyles();
  const [songs, setSongs] = useState([]);
  const [originalColors, setOriginalColors] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    fetchData();
  }, [searchKey]);

  const fetchData = () => {
    axios.get(`http://localhost:3000/playlist-from-song?searchKey=${searchKey}`)
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

  const onTabChange = (event, newTab) => {
    setCurrentTab(newTab);
  };

  const clearSearch = () => {
    setSearchKey('');
  };

  return (
    <Container className={classes.appContainer}>
      <AppBar className={classes.navBarContainer} position='static' color='default' >
        <Tabs value={currentTab} onChange={onTabChange}>
          <Tab label='Search Songs' />
          <Tab label='Create Playlist' />
        </Tabs>
      </AppBar>
      <Container className={classes.appContentContainer}>
        <Container className={classes.centerText}>
          <Typography variant='h3'>
            Melody Miners
          </Typography>
        </Container>
        <TabPanel value={currentTab} index={0}>
          <SearchSongs setSongs={setSongs} songs={songs} colors={originalColors} clearSearch={clearSearch} />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          {/* Modified SongsList component */}
          <SongsList songs={songs} colors={originalColors} />
        </TabPanel>
      </Container>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  appContainer: {
    maxWidth: '98vw !important',
    padding: '0 !important',
    margin: '1vw !important',
  },
  navBarContainer: {
    width: '100%',
  },
  appContentContainer: {
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
    textAlign: 'center',
  },
  songCount: {
    textAlign: 'center',
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
  clearButton: {
    cursor: 'pointer',
    color: theme.palette.text.primary,
  },
}));

export default App;
