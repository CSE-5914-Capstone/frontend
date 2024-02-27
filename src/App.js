import React, { useState, useEffect } from 'react';
import { Container, Typography, makeStyles, AppBar, Tabs, Tab } from '@material-ui/core';
import axios from 'axios';

import SearchSongs from './components/SearchSongs';
import SongsList from './components/SongsList';

function getRandomColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function TabPanel({value, index, children}) {
  return (
    <Container role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`}>
      {value === index && (
        children
      )}
    </Container>
  )
}

function App() {
  const classes = useStyles();
  const [songs, setSongs] = useState([]);
  const [originalColors, setOriginalColors] = useState([]);
  const [currentTab, setCurrentTab] = useState(0)

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

  const onTabChange = (event, newTab) => {
    setCurrentTab(newTab)
  }
  
  return (
    <Container className={classes.appContainer}>
      <Container className={classes.centerText}>
        <Typography variant='h3'>
          Melody Miners
        </Typography>
      </Container>
      <AppBar position='static' color='default'>
        <Tabs value={currentTab} onChange={onTabChange}>
          <Tab label='Search Songs' />
          <Tab label='Create Playlist' />
        </Tabs>
      </AppBar>

      {/** TODO Put actual components/screens so tabs change the view */}
      <TabPanel value={currentTab} index={0}>
        <SearchSongs setSongs={setSongs} songs={songs} colors={originalColors} />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <SongsList songs={songs} colors={originalColors} />
      </TabPanel>
      {/* <Container>
        <Typography variant="h4" gutterBottom>
          Number of Songs: {songs.length}
        </Typography>
      </Container> */}
    </Container>
  );
}

export default App;

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
  }
}));