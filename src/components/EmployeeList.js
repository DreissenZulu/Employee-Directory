import React from "react";
import axios from "axios";

function EmployeeInfo(props) {
    return (
        <div className="container">
            {props.employeeList.map(employee => (
                <div className="row d-flex align-items-center">
                    <div className="col-md-1"><img src={employee.picture.medium} alt="Emp Img"/></div>
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
        filter: "none",
        employees: []
    };
    
    async componentDidMount() {
        try {
            const employeeList = await axios.get("https://randomuser.me/api/?nat=CA&results=10");
            this.setState({employees: employeeList.data.results})
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        console.log(this.state.employees)
        return (
            <EmployeeInfo employeeList={this.state.employees} />
        )
    }
}

export default EmployeeList;