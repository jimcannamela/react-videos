import VideoListItem from "./VideoListItem";

function VideoList({ videos, dispatch }) {
  return (
    <div className="video-list">
      {
        videos.map((videoData) => <VideoListItem video={videoData} dispatch={dispatch}/>)        
      }
    </div>
  )
}

export default VideoList;