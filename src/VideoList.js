import VideoListItem from "./VideoListItem";

function VideoList({ videos, selectVideo }) {
console.log(selectVideo);
console.log(videos);
  return (
    <div className="video-list">
      {
        videos.map((videoData) => <VideoListItem onClick={selectVideo}  video={videoData}/>)
        
      }
    </div>
  )
}

export default VideoList;