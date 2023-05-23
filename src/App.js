import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import { useState, useEffect } from 'react';
import videoData from './videoData';

function App() {

  function fetchVideos() {
    return videoData;
  }

  return (
    <div className="App">
      <NavBar />
      <section className="content-container">
        <VideoPlayer selectedVideo={null}/>
        <VideoList videos={fetchVideos()}/>
      </section>
    </div>
  );
}

export default App;
