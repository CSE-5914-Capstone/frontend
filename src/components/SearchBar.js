import { Paper, InputBase, IconButton } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import './SearchBar.css'

// TODO Fix search bar bug
  // Height increases when deleting last character from search bar
function SearchBar() {
  return (
    <Paper component="form">
      <InputBase 
        className='input'
        placeholder='Search'
      />
      <IconButton type="submit" className="icon" aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar