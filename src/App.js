import React, { useState } from 'react';
import { Container, makeStyles, AppBar, Tabs, Tab } from '@material-ui/core';
import HomePage from './components/HomePage';
import CreatePlaylist from './components/CreatePlaylist';
import Logo from './components/Logo'; // Import your logo component here

function TabPanel({ value, index, children }) {
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
  const [currentTab, setCurrentTab] = useState(0)

  const onTabChange = (event, newTab) => {
    setCurrentTab(newTab)
  }
  
  return (
    <Container className={classes.appContainer}>
      <AppBar className={classes.navBarContainer} position='static' color='default' >
        <Tabs value={currentTab} onChange={onTabChange}>
          <Tab label='Home' />
          <Tab label='Create Playlist' />
        </Tabs>
      </AppBar>
      <Container className={classes.appContentContainer}>
        <Container className={classes.centerText}>
          <Logo /> {/* Render your logo component here */}
        </Container>
        <TabPanel value={currentTab} index={0}>
          <HomePage></HomePage>
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <CreatePlaylist></CreatePlaylist>
        </TabPanel>
      </Container>
    </Container>
  );
}

export default App;

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
    textAlign: 'center', // Center the search bar
  },
  songCount: {
    textAlign: 'center', // Center the text
    marginBottom: theme.spacing(2),
  }
}));
