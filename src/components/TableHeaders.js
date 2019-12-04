import React from "react";

function TableHeaders(props) {
    let faArrow = props.order === "descending" ? "fas fa-angle-down" : "fas fa-angle-up";
    return (
        <div>
            <div className="row d-flex align-items-center tableHeader">
                <div className="col-md-1"></div>
                <button className="btn btn-sm col-md-1" onClick={props.handleBtnClick} name="fName">First Name <i class={props.sortBy === "fName" ? faArrow : ""}></i></button>
                <button className="btn btn-sm col-md-1" onClick={props.handleBtnClick} name="lName">Last Name <i class={props.sortBy === "lName" ? faArrow : ""}></i></button>
                <button className="btn btn-sm col-md-2" onClick={props.handleBtnClick} name="dob">Date of Birth <i class={props.sortBy === "dob" ? faArrow : ""}></i></button>
                <button className="btn btn-sm col-md-2" onClick={props.handleBtnClick} name="city">City <i class={props.sortBy === "city" ? faArrow : ""}></i></button>
                <button className="btn btn-sm col-md-2" onClick={props.handleBtnClick} name="phoneNum">Phone <i class={props.sortBy === "phoneNum" ? faArrow : ""}></i></button>
                <button className="btn btn-sm col-md-3" onClick={props.handleBtnClick} name="email">Email <i class={props.sortBy === "email" ? faArrow : ""}></i></button>
            </div>
        </div>
    )
}

export default TableHeaders;