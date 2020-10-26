import React from 'react';
import Header from './header.jsx';
import Body from './body.jsx';
const header ={
    id:"Id",
    name:"Name",
    department:"Department",
    salary :"Salary"
}
const employee=[
{id :1,name:"ABC",department:"SD",salary:25000},
{id :2,name:"ABC",department:"SD",salary:25000},
{id :3,name:"ABC",department:"SD",salary:25000},
{id :4,name:"ABC",department:"SD",salary:25000},
];
function Table(){
    return(
        <table>
            <Header header={header}/>                                                                                                                         
            <Body employee={employee}/>
        </table>
    )
}
export default Table;