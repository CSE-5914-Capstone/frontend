import { React, useState } from 'react'
import { Container } from '@material-ui/core'
import SearchBar from "material-ui-search-bar"
import axios from 'axios'

function SearchSongs({setSongs}) {
  const [searchValue, setSearchValue] = useState("")
  
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
      setSongs([{
        name: result["track_name"],
        artist: result["track_artist"],
        genre: result["playlist_genre"],
        bpm: result["tempo"]
      }])
      
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
    <Container>
      <SearchBar
        value={searchValue}
        onChange={(change) => onChange(change)}
        onRequestSearch={(searchTerm) => onSearch(searchTerm)}
      />
    </Container>
  )
}

export default SearchSongs