# SF Video

Today, you will `useReducer` to implement the state of a simple youtube-like application.  You are provided some video data (in `videoData.js`) and several React components:

- `App`
- `NavBar`
- `VideoList`
- `VideoListItem`
- `VideoPlayer`

However, these components aren't talking together properly!  Your job is to implement the following features to make the site work:

## Goals

- [ ] Create a reducer function.  It should accept a state and an action as parameters.
- [ ] Define an initial state for your reducer.  You should have a `videos` property to store all the videos in the video data, and a `selectedVideo` property to store the currently selected video.
- [ ] Use `useReducer` to create your state in `App.js`.
- [ ] Use `useEffect` to load the video data into the state you just created when the `App` component loads for the first time.  
- [ ] Dispatch an action from the `VideoListItem` component when a video list item is clicked.
- [ ] Modify your reducer function to accept the action you just made so that it updates the `selectedVideo` state.

## Stretch Goals

- [ ] Dispatch an action from the `NavBar` component when the search bar is used.
- [ ] Modify your reducer function to execute a search on the video list when it receives the search action.
- [ ] Refactor the CSS and improve the styling for the website!