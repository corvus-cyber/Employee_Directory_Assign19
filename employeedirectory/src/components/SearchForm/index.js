import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search offset-lg-4">
      <div className="form-group justify-content-center">
        <label htmlFor="employee"></label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Enter employee name"
          id="employee"
        />
        {/* <datalist id="employees">
          {props.employees.map(employee => (
            <option value={employee.name.first + " " +employee.name.last} key={employee.name.first} />
          ))}
        </datalist> */}
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-lg-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
