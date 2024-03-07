import React, { useState, useEffect, useMemo } from 'react';
import SongsList from './SongsList';

const CLIENT_ID = "bec6eb2bc39d4a23bb8cec0dc497b5d2";
const CLIENT_SECRET = "d7ccc524fb7841dab9263d46e7ccfc2a";

function SpotifySongs({ spotifySong, setShowPlaylist, setPlaylistSong }) {
    const [songs, setSongs] = useState([]);
    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        const fetchAccessToken = async () => {
            try {
                const authParameters = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + "&client_secret=" + CLIENT_SECRET
                };
                const result = await fetch('https://accounts.spotify.com/api/token', authParameters);
                const data = await result.json();
                setAccessToken(data.access_token);
            } catch (error) {
                console.error('Error fetching access token:', error);
            }
        };
        fetchAccessToken();
    }, []);

    useEffect(() => {
        if (!accessToken) return;

        const fetchSongs = async () => {
            try {
                const trackParameters = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + accessToken
                    },
                };
                const response = await fetch(`https://api.spotify.com/v1/search?q=${spotifySong}&type=track`, trackParameters);
                const data = await response.json();
                console.log(data)
                const searchResults = data.tracks.items.map(item => ({
                    name: item.name,
                    artist: item.artists.map(artist => artist.name).join(' '),
                    genre: "", // You might want to fetch genre and BPM as well
                    bpm: 0,
                }));
                setSongs(searchResults);
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };
        fetchSongs();
    }, [accessToken, spotifySong]);

    // Memoize the songs list
    const memoizedSongs = useMemo(() => songs, [songs]);

    return (
        <SongsList songs={memoizedSongs} includeButton={true} setShowPlaylist={setShowPlaylist} setPlaylistSong={setPlaylistSong} />
    );
}

export default SpotifySongs;