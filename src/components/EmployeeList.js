import React from "react";
import axios from "axios";
import EmployeeInfo from "./EmployeeInfo";

function TableHeaders(props) {
  return (
    <div className="container">
      <div className="row d-flex align-items-center tableHeader">
        <div className="col-md-1"></div>
        <button className="btn btn-sm col-md-1" onClick={props.handleBtnClick} name="fName">First Name</button>
        <button className="btn btn-sm col-md-1" onClick={props.handleBtnClick} name="lName">Last Name</button>
        <button className="btn btn-sm col-md-2" onClick={props.handleBtnClick} name="dob">Date of Birth</button>
        <button className="btn btn-sm col-md-2" onClick={props.handleBtnClick} name="city">City</button>
        <button className="btn btn-sm col-md-2" onClick={props.handleBtnClick} name="phoneNum">Phone</button>
        <button className="btn btn-sm col-md-3" onClick={props.handleBtnClick} name="email">Email</button>
      </div>
    </div>
  )
}

class EmployeeList extends React.Component {
  state = {
    sortBy: "",
    order: "descending",
    search: this.props.query,
    employees: []
  };

  async componentDidMount() {
    try {
      const employeeList = await axios.get("https://randomuser.me/api/?nat=CA&seed=fodder&results=40");
      this.setState({ employees: employeeList.data.results })
    } catch (err) {
      console.log(err)
    }
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      search: nextProps.query,
    };
  }

  handleBtnClick = event => {
    (this.state.sortBy !== event.target.name) || (this.state.order === "ascending") ? this.setState({ order: "descending" }) : this.setState({ order: "ascending" });

    this.setState({ sortBy: event.target.name })
  }

  searchList() {
    let employeeList = this.state.employees;
    if (employeeList.length === 0) {
      return employeeList;
      // When the search state is updated the program will filter 
    } else if (this.state.search !== "") {
      employeeList = employeeList.filter(employee => {
        return (
          employee.name.first.toLowerCase().includes(this.state.search.toLowerCase()) ||
          employee.name.last.toLowerCase().includes(this.state.search.toLowerCase()) ||
          employee.dob.date.includes(this.state.search) ||
          employee.location.city.toLowerCase().includes(this.state.search.toLowerCase()) ||
          employee.phone.includes(this.state.search) ||
          employee.email.toLowerCase().includes(this.state.search.toLowerCase())
        );
      })
    }
    return employeeList;
  }

  render() {
    return (
      <div>
        <TableHeaders handleBtnClick={this.handleBtnClick} />
        <EmployeeInfo employeeList={this.searchList()} />
      </div>
    )
  }
}

export default EmployeeList;