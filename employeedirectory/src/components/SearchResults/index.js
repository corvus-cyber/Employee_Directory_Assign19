import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Age</th>
                <th scope="col">Cell</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {props.results.map( (employee, index) => (
                <tr key={employee.email}>
                  <th scope="row">{index+1}</th>
                  <td><img src={employee.picture.thumbnail} alt="img of employee"></img></td>
                  <td>{employee.name.first}</td>
                  <td>{employee.name.last}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.dob.age}</td>
                  <td>{employee.cell} </td>
                  <td>{employee.email}</td>
                </tr>
                ))} 
        </tbody>
    </table>
  );
}

export default SearchResults;
