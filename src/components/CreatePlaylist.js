import SearchSong from "./SearchSong";
import SpotifySongs from "./SpotifySongs";
import Playlist from "./Playlist";
import SongCard from "./SongCard";
import { useState } from "react";

function CreatePlaylist(){
    const [spotifySearch, setSpotifySearch] = useState("");
    const [showSpotifySongs, setShowSpotifySongs] = useState(false);
    const [showPlaylist, setShowPlaylist] = useState(false)
    const [playlistSong, setPlaylistSong] = useState("")
    return(<>
        <SearchSong 
            setSpotifySearch = {setSpotifySearch}
            setShowSpotifySongs = {setShowSpotifySongs} 
            setShowPlaylist = {setShowPlaylist}
        />
        {showSpotifySongs && !showPlaylist && 
            <SpotifySongs
                spotifySong = {spotifySearch}
                setShowPlaylist = {setShowPlaylist}
                setPlaylistSong = {setPlaylistSong} 
            />
        }
        {showPlaylist && <h1>Selected Song: {playlistSong}</h1>}
        {showPlaylist && <Playlist songName = {playlistSong}/>}
    </>)
}

export default CreatePlaylist