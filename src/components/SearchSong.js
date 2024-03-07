import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

function SearchSong({ setSpotifySearch, setShowSpotifySongs, setShowPlaylist }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    setSpotifySearch(searchQuery);
    setShowSpotifySongs(true);
    setShowPlaylist(false);
  };

  return (
    <form
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: 800,
        margin: "0 auto",
        padding: "0 20px",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <TextField
        id="search-bar"
        variant="outlined"
        placeholder="Search for Song"
        size="small"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ flexGrow: 1, marginRight: 10 }}
        fullWidth
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </form>
  );
}

export default SearchSong;
