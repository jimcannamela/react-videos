import React from 'react';

function NavBar() {
  return (
    <div className="app-nav">
      <h1>SF Video</h1>
      <form>
        <label htmlFor="search">
          Search 
        </label>
        <input name="search" type="text" ></input>
        <input type="submit" />
      </form>
    </div>
  )
}

export default NavBar;