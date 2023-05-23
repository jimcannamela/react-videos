function VideoPlayer({ selectedVideo }) {
  return (
    <div className="video-player">
      {
        selectedVideo === null ? 
        "No video selected!" :
        (
          <>
            <iframe src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h4 className="video-title">{ selectedVideo.title }</h4>
            <p className="video-description">{ selectedVideo.description } </p>
          </>

        )
      }
      
    </div>
  )
}

export default VideoPlayer;