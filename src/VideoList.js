import React from "react";
import VideoListItem from "./VideoListItem";

function VideoList({ videos, handleVideoListItemClick }) {

  return (
    <div className="video-list">
      {
        videos.map((videoData) => <VideoListItem handleListItemClick={handleVideoListItemClick} video={videoData}/>)
      }
    </div>
  )
}

export default VideoList;