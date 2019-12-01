import React from "react";
import axios from "axios";

function EmployeeInfo(props) {
    return (
        <div className="container">
            {props.employeeList.map(employee => (
                <div className="row d-flex align-items-center">
                    <div className="col-md-1"><img src={employee.picture.medium} alt="Emp Img" /></div>
                    <div className="col-md-1">{employee.name.first}</div>
                    <div className="col-md-1">{employee.name.last}</div>
                    <div className="col-md-2">{employee.dob.date.split("T")[0]}</div>
                    <div className="col-md-2">{employee.location.city}</div>
                    <div className="col-md-2">{employee.phone}</div>
                    <div className="col-md-3">{employee.email}</div>
                </div>
            ))}
        </div>
    )
}

function TableHeaders() {
    return (
        <div className="container">
            <div className="row d-flex align-items-center" style={{ fontSize: "10pt", borderBottom: "2px solid black" }}>
                <div className="col-md-1"></div>
                <button className="btn btn-sm col-md-1" name="fName">First Name</button>
                <button className="btn btn-sm col-md-1" name="lName">Last Name</button>
                <button className="btn btn-sm col-md-2" name="dob">Date of Birth</button>
                <button className="btn btn-sm col-md-2" name="city">City</button>
                <button className="btn btn-sm col-md-2" name="phoneNum">Phone</button>
                <button className="btn btn-sm col-md-3" name="email">Email</button>
            </div>
        </div>
    )
}

class EmployeeList extends React.Component {
    state = {
        filter: this.props.filter,
        order: this.props.order,
        search: this.props.query,
        employees: []
    };

    async componentDidMount() {
        try {
            const employeeList = await axios.get("https://randomuser.me/api/?nat=CA&seed=fodder&results=30");
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

    filterList() {
        let employeeList = this.state.employees;
        if (employeeList.length === 0) {
            return employeeList;
        // When the search state is updated the program will filter 
        } else if (this.state.search !== "") {
            employeeList = employeeList.filter(employee => {
                return (
                    employee.name.first.toLowerCase().includes( this.state.search.toLowerCase() ) ||
                    employee.name.last.toLowerCase().includes( this.state.search.toLowerCase() ) ||
                    employee.dob.date.includes( this.state.search ) ||
                    employee.location.city.toLowerCase().includes( this.state.search.toLowerCase() ) ||
                    employee.phone.includes( this.state.search ) ||
                    employee.email.toLowerCase().includes( this.state.search.toLowerCase() )
                );
            })
        }
        return employeeList;
    }

    render() {
        return (
            <div>
                <TableHeaders />
                <EmployeeInfo employeeList={this.filterList()} />
            </div>
        )
    }
}

export default EmployeeList;