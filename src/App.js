import logo from './logo.svg';
import './App.css';
import Container from "@material-ui/core/Container"
import { IconButton, InputBase, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Container>
      <Paper component="form">
        <InputBase 
          placeholder='Search'
        />
        <IconButton type="submit" aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
}

export default App;
