
function VideoListItem({ video, dispatch }) {

  function selectVideo() {
    const action = {
      type: "SET_SELECTED_VIDEO",
      payload: video
    }
    dispatch(action);
  }
  return (
    <div className="video-list-item" onClick={selectVideo} >
      <header>
        <img src={video.snippet.thumbnails.default.url} className="video-list-item-thumbnail"></img>
      </header>
      <section>
        <p className="video-list-item-title">{video.snippet.title}</p>
        <p className="video-list-item-channel">{video.snippet.channelTitle}</p>
      </section>
    </div>
  )
}

export default VideoListItem;