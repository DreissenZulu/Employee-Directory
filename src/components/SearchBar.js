import React from 'react';

function SearchBar(props) {
  return (
    <nav className="navbar navbar-light bg-info d-flex justify-content-center position-fixed"  onSubmit={e => e.preventDefault()}>
      <form className="form-inline" >
        <input className="form-control" style={{ width: "500px" }} name="search" onChange={props.handleSearch} type="search" placeholder="Search Directory" autoComplete="off" aria-label="Search" />
        {/* <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button> */}
      </form>
    </nav>
  )
}

export default SearchBar;