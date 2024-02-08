import './App.css';
// import SearchBar from './components/SearchBar'
import { Box, Container, InputBase, Paper, Typography, IconButton } from '@material-ui/core';
import SearchBar from "material-ui-search-bar"
import SearchIcon from "@material-ui/icons/Search"

function App() {
  
  const onSearch = (search: String) => {
    console.log(search)
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
        onChange={() => console.log('onChange')}
        onRequestSearch={(searchTerm) => onSearch(searchTerm)}
      />
      </Container>
      
    </Container>
  );
}

export default App;


