import React from 'react';
import axios from 'axios';

export default class RequestText extends React.Component {
    state = {
      songs: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:3000/playlist-from-song`)
        .then(res => {
          const songs = res.data;
          this.setState({ songs });
        })
    }
  
    render() {
      return (
        <ul>
          {
            this.state.songs
              .map(song =>
                <li key={song.track_id}>{song.track_name}</li>
              )
          }
        </ul>
      )
    }
  }