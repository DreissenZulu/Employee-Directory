import React from 'react';
import EmployeeList from './components/EmployeeList'

function SortEmployees() {
  return (
    <div className="container">
      <div className="row d-flex align-items-center" style={{fontSize: "10pt", borderBottom: "2px solid black"}}>
        <div className="col-md-1"></div>
        <div className="col-md-1">First Name</div>
        <div className="col-md-1">Last Name</div>
        <div className="col-md-2">Date of Birth</div>
        <div className="col-md-2">City</div>
        <div className="col-md-2">Phone</div>
        <div className="col-md-3">Email</div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <SortEmployees />
      <EmployeeList />
    </div>
  );
}

export default App;
