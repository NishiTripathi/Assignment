import React from "react";
function Body(props) {
  //  console.log(props.employee);
  const employees = props.employee.map(element =>
    ( <tr>
      <th>{element.id}</th>
      <th>{element.name}</th>
      <th>{element.department}</th>
      <th>{element.salary}</th>
    </tr>
  ));
  return <>{ employees }</>;
}
export default Body;
