import React from 'react';
import axios from 'axios';

export default class RequestText extends React.Component {
    state = {
      songs: []
    }
  
    componentDidMount() {
      axios.get(`http://127.0.0.1:5000/query`)
      .then(res => {
          const songs = res.data;
          this.setState({ songs });
        })
    }
  
    render() {
      return (
        <p>{JSON.stringify(this.state)}</p>
      )
    }
  }