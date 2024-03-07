import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

function SearchSong ({setSpotifySearch, setShowSpotifySongs, setShowPlaylist}) {
  const [searchQuery, setSearchQuery] = useState("")

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
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <Button
        variant = "contained"
        onClick={(event) => {
          setSpotifySearch(searchQuery)
          setShowSpotifySongs(true)
          setShowPlaylist(false)
        }}
      >
        Search
      </Button>
    </form>
    </>
  )
}

export default SearchSong