import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import SongsList from "./SongsList";
import axios from 'axios';

function SearchSong ({setShowSpotifySongs}) {
  const [songs, setSongs] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  return(
    <>
    <form>
      <TextField
        id="search-bar"
        className="text"
        variant="outlined"
        placeholder="Search for Song"
        size="small"
        sx={{
          width: 350
        }}
      />
      <Button
        variant = "contained"
        onClick={() => {
          setShowSpotifySongs(true)
        }}
      >
        Search
      </Button>
    </form>
    </>
  )
}

export default SearchSong