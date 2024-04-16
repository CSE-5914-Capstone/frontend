import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SongsList from './SongsList';

function Playlist({ songTrackId, songName, danceability, loudness, valence, energy, liveness, tempo, includeButton, setShowPlaylist, setPlaylistSong }) {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        if (songTrackId) {
            fetchData();
        }
    }, [songTrackId, songName, danceability, loudness, valence, energy, liveness, tempo]);

    const constructUrl = () => {
        let url = "http://127.0.0.1:5000/query?";
        const queryParams = [];
        
        if (songTrackId != null) {
            queryParams.push("track_id=" + encodeURIComponent(songTrackId));
        }

        if (songName != null) {
            queryParams.push("track_name=" + encodeURIComponent(songName));
        }

        if (danceability != null) {
            queryParams.push("danceability=" + danceability);
        }
        if (loudness != null) {
            queryParams.push("loudness=" + loudness);
        }
        if (valence != null) {
            queryParams.push("valence=" + valence);
        }
        if (energy != null) {
            queryParams.push("energy=" + energy);
        }
        if (liveness != null) {
            queryParams.push("liveness=" + liveness);
        }
        if (tempo != null) {
            queryParams.push("tempo=" + tempo);
        }

        url += queryParams.join('&');
        return url;
    };

    const fetchData = () => {
        const url = constructUrl();
        console.log(url);
        axios.get(url)
            .then((response) => {
                const data = response.data.Playlist;
                console.log("DATA IS: ", data);
                const searchResults = data.map((song) => ({
                    name: song.track_name,
                    artist: song.artists[0],
                    bpm: song.tempo,
                    albumImage: song.spotify_link,
                    track_id: song.track_id
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
