import React from 'react';

   function Header(props) {
       const headers = props.header;
       return (
        <thead>
        <tr>
       <th>{headers.id}</th>
       <th>{headers.name}</th>
       <th>{headers.department}</th>
       <th>{headers.salary}</th>
        </tr>
      </thead>
       )
       
   }
export default Header;
