import React from 'react';
import EmployeeDetails from './EmployeeDetails';

function EmployeeContainer (props) {
return (
<table className="table mt-4">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
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