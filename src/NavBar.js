function NavBar({ videos, dispatch }) {

  function isFound(filter) {

    return videos.snippet.title === filter;
  }
  
  function filterVideos(e) {

    e.preventDefault();
    let filterCriteria = document.getElementById('search').value;
    let videoList = [];
    for (let v=0; v < videos.length; v++) {
      console.log(videos[v].snippet.title);
      
      if (videos[v].snippet.title.search(filterCriteria)) {
        console.log('filtered stuff', filterCriteria);
        videoList.push(videos[v]);
      }
    }
    console.log('videoList:', videoList);
    const action = {
      type: "SET_VIDEOS",
      payload: videoList
    }
    dispatch(action);
  }


  return (
    <div className="app-nav">
      <h1>SF Video</h1>
      <form onSubmit={filterVideos}>
        <label htmlFor="search">Search</label>
        <input id="search" name="search" type="text" ></input>
        <input type="submit" />
      </form>
    </div>
  )
}

export default NavBar;