import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList'
import SearchBar from './components/SearchBar'

function App() {
  const [query, setQuery] = useState("");

  function handleSearch (event) {
    event.preventDefault();
    setQuery(event.target.value.trim());
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
