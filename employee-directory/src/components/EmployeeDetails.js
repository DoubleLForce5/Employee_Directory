import React from 'react';
import { format } from 'date-fns'

function EmployeeDetails(props) {
  return (
    <tbody>
      {props.results.map(results => (
        <tr>
          <td><img alt="Employee" src={results.picture.thumbnail} /></td> 
          <td>{results.name.first}{results.name.last}</td>
          <td>{results.phone}</td>
          <td><a href={"mailto:" + results.email}>{results.email}</a></td>
          <td>{ format(new Date(results.dob.date), 'MM/dd/yyyy')}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default EmployeeDetails; 