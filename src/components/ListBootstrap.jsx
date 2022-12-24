import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

function ListBootstrap(props){
    let data=[
        {'name':'Suraj','email':'Suraj@gmail.com','contact':'111'},
        {'name':'Rohit','email':'Rohit@gmail.com','contact':'111'},
        {'name':'Rohan','email':'Rohan@gmail.com','contact':'222'},
        {'name':'Raja','email':'Raja@gmail.com','contact':'333'},
        {'name':'Subham','email':'Subham@gmail.com','contact':'444'},
        {'name':'Madhav','email':'Madhav@gmail.com','contact':'111'}
    ]
    return(
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
            {
                data.map((item)=>(
                    item.contact==='111'?
                    <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                  </tr>:null
                ))
            }
        </tbody>
      </Table>
    )
}

export default ListBootstrap;