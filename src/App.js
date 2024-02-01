import './App.css';
import SearchBar from './components/SearchBar'
import { Box, Container, Typography } from '@material-ui/core';

function App() {
  return (
    <Container className='app-container'>
      <Container className='center-text'>
        <Typography variant='h3'>
          Melody Miners
        </Typography>
      </Container>
      <Container>
        <SearchBar />
      </Container>
    </Container>
  );
}

export default App;
