import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import Maintable from "../components/EmployeeTable"
import Row from "../components/Row"
import Hero from "../components/Hero"


class Search extends Component {
  state = {
    search: [],
    employees: [],
    searchedEmp: [],
    results: [],
    error: "",
  };
  

  componentDidMount() {
    API.getRandomEmployees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    const filteredChoice = this.state.employees.filter((filter)=>{
      let chosen = filter.name.first + filter.name.last + filter.gender
      console.log(event.target.value)
      return chosen.indexOf(event.target.value) !== -1;
    })
    this.setState({searchedEmp: filteredChoice})
  };


  render() {
    let table;
    const searched = this.state.search;
    let alterstate
    if(searched===undefined || searched.length===0){alterstate= false}
    else{alterstate=true}
    {console.log(searched)}
    {console.log(alterstate)}
    if (alterstate=false){table=<Maintable employees= {this.state.employees} />} 
    else {table=<SearchResults results={this.state.searchedEmp}/>}
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <Hero>
          </Hero>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <Row>
            <div className="col-10">
              <SearchForm
                handleInputChange={this.handleInputChange}
                employees={this.state.employees}
              />
            </div>
          </Row>
          <Row className="justify-content-md-center">
            {table}
            {/* <SearchResults results={this.state.searchedEmp} />
            <Maintable employees= {this.state.employees}/> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
