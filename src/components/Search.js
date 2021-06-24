import React from 'react';

function Search(props) {
  return (
  <form className="form-inline d-flex justify-content-center">
    <input 
    value={props.Search}
    onChange={e => props.handleFormSubmit(e)}
    name="search"
    className="form-control mr-sm-2" 
    type="search" 
    placeholder="Search" 
    aria-label="Search" 
    />
    {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onChange={e => props.handleFormSubmit(e)}>Search</button> */}
  </form>
  )
}

export default Search;