import axios from 'axios';

 export default async function GetData(songName){
  var url = 'http://127.0.0.1:5000/query?trackname=' + songName;
  var songs = {};
  axios.get(url)
  .then(res => {
      songs = res.data;
      console.log(songs)
      return JSON.stringify(songs);
    })
  console.log(songs)
  return JSON.stringify(songs);
}