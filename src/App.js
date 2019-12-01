import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList'

function App() {
  const [query, setQuery] = useState("");

  function SearchBar(props) {
    return (
      <nav className="navbar navbar-light bg-info">
        <form className="form-inline" onSubmit={props.handleSearch}>
          <input className="form-control mr-sm-2" name="search" type="search" placeholder="Search Directory" aria-label="Search" />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    )
  }
  
  function handleSearch (event) {
    event.preventDefault();
    setQuery(event.target.search.value.trim());
  }
  
  return (
    <div>
      <SearchBar 
        handleSearch={handleSearch}
      />
      <EmployeeList query={query} />
    </div>
  );
}

export default App;
