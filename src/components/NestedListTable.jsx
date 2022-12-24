import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function NestedListTable(props) {
  let data = [
    {
      name: "Suraj",
      email: "Suraj@gmail.com",
      contact: "111",
      address: [
        { hn: 1, city: "Ranchi", country: "India" },
        { hn: 2, city: "Palamu", country: "India" },
        { hn: 3, city: "Patratu", country: "India" },
        { hn: 4, city: "JamshedPur", country: "India" },
      ],
    },
    {
      name: "Rohit",
      email: "Rohit@gmail.com",
      contact: "111",
      address: [
        { hn: 5, city: "Ranchi", country: "India" },
        { hn: 6, city: "Palamu", country: "India" },
        { hn: 7, city: "Patratu", country: "India" },
        { hn: 8, city: "JamshedPur", country: "India" },
      ],
    },
    {
      name: "Rohan",
      email: "Rohan@gmail.com",
      contact: "222",
      address: [
        { hn: 9, city: "Ranchi", country: "India" },
        { hn: 10, city: "Palamu", country: "India" },
        { hn: 11, city: "Patratu", country: "India" },
        { hn: 12, city: "JamshedPur", country: "India" },
      ],
    },
    {
      name: "Raja",
      email: "Raja@gmail.com",
      contact: "333",
      address: [
        { hn: 13, city: "Ranchi", country: "India" },
        { hn: 14, city: "Palamu", country: "India" },
        { hn: 15, city: "Patratu", country: "India" },
        { hn: 16, city: "JamshedPur", country: "India" },
      ],
    },
    {
      name: "Subham",
      email: "Subham@gmail.com",
      contact: "444",
      address: [
        { hn: 17, city: "Ranchi", country: "India" },
        { hn: 18, city: "Palamu", country: "India" },
        { hn: 19, city: "Patratu", country: "India" },
        { hn: 20, city: "JamshedPur", country: "India" },
      ],
    },
    {
      name: "Madhav",
      email: "Madhav@gmail.com",
      contact: "111",
      address: [
        { hn: 21, city: "Ranchi", country: "India" },
        { hn: 22, city: "Palamu", country: "India" },
        { hn: 23, city: "Patratu", country: "India" },
        { hn: 24, city: "JamshedPur", country: "India" },
      ],
    },
  ];

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>S No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item,i) =>
          item.contact === "111" ? (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>S No</th>
                      <th>House</th>
                      <th>City</th>
                      <th>Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.address.map((adr,j) => (
                      <tr key={j}>
                        <td>{j+1}</td>
                        <td>{adr.hn}</td>
                        <td>{adr.city}</td>
                        <td>{adr.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ) : null
        )}
      </tbody>
    </Table>
  );
}

export default NestedListTable;
