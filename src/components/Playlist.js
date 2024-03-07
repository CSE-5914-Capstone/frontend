import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SongsList from './SongsList';

function Playlist({ songName, includeButton, setShowPlaylist, setPlaylistSong }) {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        if (songName) {
            fetchData();
        }
    }, [songName]);

    const fetchData = () => {
        axios.get("http://127.0.0.1:5000/query?trackname=" + encodeURI(songName))
            .then((response) => {
                const data = response.data.playlist;
                const searchResults = data.map((song) => ({
                    name: song,
                    artist: "",
                    genre: "",
                    bpm: 0,
                    albumImage: ""
                }));
                setSongs(searchResults);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    return (
        <SongsList
            songs={songs}
            includeButton={includeButton}
            setShowPlaylist={setShowPlaylist}
            setPlaylistSong={setPlaylistSong}
        />
    );
}

export default Playlist;
