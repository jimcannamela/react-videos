import './App.css';
import NavBar from './NavBar';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import videoData from './videoData';
import { useReducer } from 'react';

function App() {

  const currentVideoReducer = (state, action) => {
    console.log('action:', action, 'state:', state)

    switch (action.type) {
      case 'SELECTED_VIDEO':
        
          return {...state, name: action.payload}
      default: 
          return state;
    }
  }

  const [video, videoDispatch] = useReducer(currentVideoReducer, {name: ''});

  
const loadVideo = (e) => {
  e.preventDefault()
  const action = { type: "SELECTED_VIDEO", payload: e.target.value }
  videoDispatch(action);
}


  function fetchVideos() {
    return videoData;
  }

  return (
    <div className="App">
      <NavBar />
      <section className="content-container">
        <VideoPlayer selectedVideo={null}/>
        <VideoList videos={fetchVideos()} selectVideo={loadVideo} />
      </section>
    </div>
  );
}

export default App;
