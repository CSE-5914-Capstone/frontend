import axios from 'axios';
import SongsList from './SongsList';
import React, {useState, useEffect} from 'react';


function SpotifySongs({setShowPlaylist, setPlaylistSong}){
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []); 
    
    const fetchData = () => {
        //songName will be passed in as a parameter here
        axios.get("http://localhost:3000/playlist-from-song")
        .then((response) => {
            let data = response.data;
            let searchResults = [];

            if (Array.isArray(data)) {
                data.forEach((song) => {
                searchResults.push({
                    name: song["track_name"],
                    artist: song["track_artist"],
                    genre: song["playlist_genre"],
                    bpm: Math.round(song["tempo"]),
                });
                });
            }

            setSongs(searchResults);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    };

    return(<SongsList songs={songs} includeButton={true} setShowPlaylist = {setShowPlaylist} setPlaylistSong = {setPlaylistSong}/>)
}

export default SpotifySongs;