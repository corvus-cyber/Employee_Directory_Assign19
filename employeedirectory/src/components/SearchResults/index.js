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
            </tr>
        </thead>
        <tbody>
            {props.results.map( (employee, index) => (
                <tr>
                    <th scope="row">{index+1}</th>
                    <td><img src={employee.picture.thumbnail} alt="img of chosen employee"></img></td>
                    <td>{employee.name.first}</td>
                    <td>{employee.name.last}</td>
                </tr>
                ))} 
        </tbody>
    </table>
  );
}

export default SearchResults;
