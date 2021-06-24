import React, { Component } from 'react';
import Search from './Search';
import Header from './Header';
import EmployeeContainer from "./EmployeeContainer";
import API from "../utils/API";

class Directory extends Component {
  state = {
    search: "",
    results: [],
    sort: "",
    error: ""
  };

  componentDidMount() {
    API.search()
      .then(res => this.setState(
        {results: res.data.results}))
        .catch(err => console.log(err))
  };

  handleInputChange = event => {
    console.dir(event.target)
    const name = event.target.name
    const value = event.target.value
    this.state({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault()
    this.componentDidMount(this.state.search)
  };

  handleSort = () => {
    this.setState({ sort: this.state.sort.sort()})
  }

  render() {
    return <>
    <Header />
    <Search handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
    <EmployeeContainer results={this.state.results} handleSort={this.handleSort}/>
    </>
  }
}

export default Directory; 