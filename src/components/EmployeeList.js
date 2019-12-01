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

class EmployeeList extends React.Component {
    state = {
        filter: this.props.filter,
        order: this.props.order,
        employees: []
    };

    async componentDidMount() {
        try {
            const employeeList = await axios.get("https://randomuser.me/api/?nat=CA&seed=fodder&results=20");
            this.setState({ employees: employeeList.data.results })
        } catch (err) {
            console.log(err)
        }
    }

    sortList() {
        let employeeList = this.state.employees
        if (employeeList.length === 0) {
            return employeeList;
        } else {
            employeeList.sort()
        }
        console.log(employeeList)
        switch (this.state.filter) {
            case "firstDescending":

                break;
            case "firstAscending":

                break;
            default:
                return employeeList
        }
    }

    render() {
        console.log(this.state.employees)
        return (
            <div>
                <div className="container">
                    <div className="row d-flex align-items-center" style={{ fontSize: "10pt", borderBottom: "2px solid black" }}>
                        <div className="col-md-1"></div>
                        <button className="btn btn-sm col-md-1">First Name</button>
                        <button className="btn btn-sm col-md-1">Last Name</button>
                        <button className="btn btn-sm col-md-2">Date of Birth</button>
                        <button className="btn btn-sm col-md-2">City</button>
                        <button className="btn btn-sm col-md-2">Phone</button>
                        <button className="btn btn-sm col-md-3">Email</button>
                    </div>
                </div>
                <EmployeeInfo employeeList={this.sortList()} />
            </div>
        )
    }
}

export default EmployeeList;