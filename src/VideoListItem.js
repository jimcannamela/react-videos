import React from "react";

function VideoListItem({ video, handleListItemClick }) {
  return (
    <div onClick={() => handleListItemClick(video)} className="video-list-item">
      <img src={video.thumbnail.url} className="video-list-item-thumbnail"></img>
      <h6 className="video-list-item-title">{video.title}</h6>
      <h6 className="video-list-item-channel">{video.channelTitle}</h6>
    </div>
  )
}

export default VideoListItem;