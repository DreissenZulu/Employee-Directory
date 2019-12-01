import React from 'react';

function SearchBar(props) {
  return (
    <nav className="navbar navbar-light bg-info">
      <form className="form-inline" >
        <input className="form-control mr-sm-2" name="search" onChange={props.handleSearch} type="search" placeholder="Search Directory" autoComplete="off" aria-label="Search" />
        {/* <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button> */}
      </form>
    </nav>
  )
}

export default SearchBar;