import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
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
  
  //This will let us display the default employee directory
  componentDidMount() {
    API.getRandomEmployees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  };

  //This will let us display the searched employees
  handleInputChange = event => {
    let searchkey= event.target.value;
    console.log("searchkey", searchkey)
    //If the user types a lower case letter as the first in the string it will be changed to uppercase
    let uppercaseKey= searchkey.charAt(0).toUpperCase() + searchkey.slice(1);
    console.log("uppercase", uppercaseKey)
    this.setState({ search: uppercaseKey});
    const filteredChoice = this.state.employees.filter((filter)=>{
      let chosen = filter.name.first + filter.name.last + filter.gender
      console.log(event.target.value)
      return chosen.indexOf(uppercaseKey) !== -1;
    })
    //sends the search to the state
    this.setState({searchedEmp: filteredChoice})
  };


  render() {
    //This will search to see whether there is any content in the state.search. If there is, it will display the searched table, if not it will display the default
    let table;
    const searched = this.state.search;
    let alterstate
    if(searched===undefined || searched.length===0){alterstate= false}
    else{alterstate=true}
    {console.log(searched)}
    {console.log(alterstate)}
    if (alterstate===false){table=<Maintable employees= {this.state.employees} />} 
    else {table=<SearchResults results={this.state.searchedEmp}/>}
    //Format of the actual webpage
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <Hero >
          </Hero>
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
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
