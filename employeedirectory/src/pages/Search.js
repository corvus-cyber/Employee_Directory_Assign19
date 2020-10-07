import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import Maintable from "../components/EmployeeTable"
import Row from "../components/Row"
import Col from "../components/Col";

class Search extends Component {
  state = {
    search: [],
    employees: [],
    searchedEmp: [],
    results: [],
    error: "",
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getRandomEmployees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    const filteredChoice = this.state.employees.filter((filter)=>{
      let chosen = filter.name.first + filter.name.last 
      return chosen.indexOf(this.state.search) !== -1;
    })
    this.setState({searchedEmp: filteredChoice})
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getSearchedEmployee(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.results);
  //       }
  //       this.setState({ results: res.data.results, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.results }));
  // };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <Row className="d-flex justify-content-md-center">
            <div className="col-12">
              <SearchForm
                handleInputChange={this.handleInputChange}
                employees={this.state.employees}
              />
            </div>
          </Row>
          <Row className="justify-content-md-center">
            <SearchResults results={this.state.searchedEmp} />
            <Maintable employees= {this.state.employees}/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
