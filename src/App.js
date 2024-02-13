import './App.css';
// import SearchBar from './components/SearchBar'
import { Box, Container, InputBase, Paper, Typography, IconButton } from '@material-ui/core';
import SearchBar from "material-ui-search-bar"
import SearchIcon from "@material-ui/icons/Search"
import axios from 'axios'
import { useState } from 'react';

function App() {
  
  const [searchValue, setSearchValue] = useState("Test")
  
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
      
    </Container>
  );
}

export default App;


