import React, { useState, useEffect } from 'react';
import { Container, Typography, makeStyles, AppBar, Tabs, Tab, Slider } from '@material-ui/core';
import axios from 'axios';

import SearchSongs from './components/SearchSongs';
import SongsList from './components/SongsList';

function getNextColor(index) {
  const colors = [
  'red', 'orange', 'yellow', 'greenyellow', 'green',
  'teal', 'cyan', 'dodgerblue', 'blue', 'indigo', 'purple', 'violet'
];
  return colors[index % colors.length];
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
  const [numberOfSongs, setNumberOfSongs] = useState(1);
  const [maxSongs, setMaxSongs] = useState(0);

  useEffect(() => {
    fetchData();
  }, [searchKey, numberOfSongs]);

  const fetchData = () => {
    axios.get(`http://localhost:3000/playlist-from-song?searchKey=${searchKey}`)
      .then((response) => {
        let data = response.data;
        let searchResults = [];

        if (Array.isArray(data)) {
          setMaxSongs(data.length);
          data.slice(0, numberOfSongs).forEach((song, index) => {
            searchResults.push({
              name: song["track_name"],
              artist: song["track_artist"],
              genre: song["playlist_genre"],
              bpm: Math.round(song["tempo"]),
            });
          });
        }

        setSongs(searchResults);
        setOriginalColors(Array(searchResults.length).fill().map((_, index) => getNextColor(index)));
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

  const handleSliderChange = (event, newValue) => {
    setNumberOfSongs(newValue);
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
          <div className={classes.sliderContainer}>
            <Typography id="song-slider" gutterBottom>
              Number of Songs to Display: {numberOfSongs}
            </Typography>
            <Slider
              value={numberOfSongs}
              onChange={handleSliderChange}
              aria-labelledby="song-slider"
              step={1}
              marks
              min={1}
              max={maxSongs}
            />
          </div>
          <SearchSongs setSongs={setSongs} songs={songs} colors={originalColors} clearSearch={clearSearch} />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
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
  sliderContainer: {
    width: '50%',
    margin: 'auto',
    marginTop: theme.spacing(2),
  },
}));

export default App;
