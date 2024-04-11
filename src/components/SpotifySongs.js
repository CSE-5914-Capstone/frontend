import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import SongsList from './SongsList';

const CLIENT_ID = "bec6eb2bc39d4a23bb8cec0dc497b5d2";
const CLIENT_SECRET = "d7ccc524fb7841dab9263d46e7ccfc2a";

function SpotifySongs({ spotifySong, setShowPlaylist, setSelectedSong, setDanceability, setEnergy, setLoudness, setLiveness, setValence, setTempo }) {
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
                const searchResults = data.tracks.items.map(async (item) => {
                    const albumResponse = await fetch(item.album.href, { headers: { 'Authorization': 'Bearer ' + accessToken } });
                    const albumData = await albumResponse.json();
                    return {
                        name: item.name,
                        artist: item.artists.map(artist => artist.name).join(' '),
                        bpm: 0,
                        albumImage: albumData.images[0].url
                    };
                });
                Promise.all(searchResults).then((results) => {
                    setSongs(results);
                });
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };
        fetchSongs();
    }, [accessToken, spotifySong]);

    return <SongsList 
        songs={songs} 
        includeButton={true} 
        setShowPlaylist={setShowPlaylist} 
        setSelectedSong={setSelectedSong}
        setDanceability={setDanceability}
        setEnergy={setEnergy}
        setLoudness={setLoudness}
        setLiveness={setLiveness}
        setValence={setValence}
        setTempo={setTempo}
    />;
}

export default SpotifySongs;
