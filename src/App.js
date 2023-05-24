import './App.css';
import NavBar from './NavBar';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import videoData from './videoData';
import { useEffect, useReducer } from 'react';

// Create a reducer function. It should accept a state and an action as parameters.
  function reducer(state, action) {
    switch(action.type) {
      case "SET_VIDEOS":
        // LONG WAY
          // const newState = {...state}
          // newState.videos = action.payload  
          // return newState;
        // SHORTHAND VERSION
        return {...state, videos: action.payload}
      // Modify your reducer function to accept the action you just made so that it updates the selectedVideo state.  
      case "SET_SELECTED_VIDEO":
        return {...state, selectedVideo: action.payload}
      default: 
        return state;
    }    
  };

// Define an initial state for your reducer. You should have a videos property to store all 
// the videos in the video data, and a selectedVideo property to store the currently selected
// video. (THE SHAPE OF THE STATE!!!)  
  const initialState = { 
    videos: {},
    selectedVideo: null
  };

// BEGINNING OF THE APP FUNCTION!!!
function App() {

  // Use useReducer to create your state in App.js.
  const [state, dispatch] = useReducer(reducer, initialState);

  function fetchVideos() {
    return videoData;
  }

  // Use useEffect to load the video data into the state you just created when the App component loads for the first time.
  useEffect(() => {
    const action = {
      type: "SET_VIDEOS",
      payload: fetchVideos(),
    }
    dispatch(action)
  }, []);

  return (
    <div className="App">
      <NavBar />
      <section className="content-container">
        <VideoPlayer selectedVideo={state.selectedVideo}/>
        {/* Dispatch an action from the VideoListItem component when a video list item is clicked. */}
        <VideoList videos={state.videos} dispatch={dispatch} />
      </section>
    </div>
  );
}

export default App;
