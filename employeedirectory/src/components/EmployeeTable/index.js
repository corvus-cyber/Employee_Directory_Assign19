import React from "react";

function Layout(props){
    return(
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
                {props.employees.map( (employee, index) => (
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td><img src={employee.picture.small} alt="img of employee"></img></td>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.name.gender}</td>
                        <td>{employee.name.age}</td>
                        <td>{employee.cell} </td>
                        <td>{employee.email}</td>
                    </tr>
                    ))} 
            </tbody>
        </table>
    )
} 

export default Layout;