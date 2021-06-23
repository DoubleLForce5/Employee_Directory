import React from 'react';

function Search(props) {
  return (
  <form className="form-inline d-flex justify-content-center">
    <input 
    value={props.Search}
    onChange={props.handleInputChange}
    name="search"
    className="form-control mr-sm-2" 
    type="text" 
    placeholder="Search" 
    aria-label="Search" 
    />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  )
}

export default Search;