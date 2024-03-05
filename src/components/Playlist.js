import axios from 'axios';
import SongsList from './SongsList';
import React, {useState, useEffect} from 'react';


function Playlist({songName}){
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []); 
    
    const fetchData = () => {
        //songName will be passed in as a parameter here
        // axios.get("http://127.0.0.1:5000/query?trackname=I%20Don%27t%20Care%20(with%20Justin%20Bieber)%20-%20Loud%20Luxury%20Remix")
        axios.get("http://127.0.0.1:5000/query?trackname=" + encodeURI(songName))
        .then((response) => {
            let data = response.data.playlist;
            let searchResults = [];
            data.forEach((song) => {
            searchResults.push({
                name: song,
                artist: "",
                genre: "",
                bpm: 0,
            });
            });
            setSongs(searchResults);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    };

    return(<SongsList songs={songs} />)
}

export default Playlist;