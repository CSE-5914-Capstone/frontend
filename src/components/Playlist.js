import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SongsList from './SongsList';

function Playlist({ songName, danceability, loudness, valence, energy, liveness, tempo, includeButton, setShowPlaylist, setPlaylistSong }) {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        if (songName) {
            fetchData();
        }
    }, [songName]);

    const constructUrl = () => {
        let url = "http://127.0.0.1:5000/query?trackname=" + encodeURI(songName)
        if(danceability != null){
            url += "?danceability="+danceability
        }
        if(loudness != null){
            url += "?loudness="+loudness
        }
        if(valence != null){
            url += "?valence="+valence
        }
        if(energy != null){
            url += "?energy="+energy
        }
        if(liveness != null){
            url += "?liveness="+liveness
        }
        if(tempo != null){
            url += "?tempo="+tempo
        }
        return url
    }

    const fetchData = () => {
        let url = constructUrl()
        console.log(url)
        axios.get(url)
            .then((response) => {
                const data = response.data.Playlist;
                console.log("DATA IS: ", data)
                const searchResults = data.map((song) => ({
                    name: song.track_name,
                    artist: song.artists[0],
                    bpm: song.tempo,
                    albumImage: song.spotify_link
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
