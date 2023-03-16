import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import { useState, useEffect } from 'react';

/*
  GET:     "Give me the data!"
  POST:    "Here's some new data, plz save!"
  PUT:     "Here's some updated data, overwrite the old data plz!"
  DELETE:  "Please get rid of this data!"
*/

function App() {

  let [videos, setVideos] = useState([]);
  let [selectedVideo, setSelectedVideo] = useState(null);

  function fetchVideos() {
    return fetch("https://sf-collective-api.herokuapp.com/videos", { method: "GET" } )
    .then(response => response.json())
    .then(newVideoList => setVideos(newVideoList));
  }

  useEffect(() => {
    fetchVideos();
  }, [])

  function handleVideoSelect(video) {
    setSelectedVideo(video);
  }

  return (
    <div className="App">
      <NavBar />
      <section className="content-container">
        <VideoPlayer selectedVideo={selectedVideo}/>
        <VideoList videos={videos} handleVideoListItemClick={handleVideoSelect}/>
      </section>
    </div>
  );
}

export default App;
