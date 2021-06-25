import React from 'react';
import EmployeeDetails from './EmployeeDetails';

function EmployeeContainer (props) {
return (
<table className="table mt-4 table-striped">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th className="pb-2" scope="col">Name   <button className='btn btn-sm px-0' onClick={props.handleSort}><i className="bi bi-arrow-down-up"></i></button></th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
      </tr>
  </thead>
    <EmployeeDetails {...props} />
</table>
)
};

export default EmployeeContainer;