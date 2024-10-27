import React from "react";
import { useState, useEffect } from "react";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import Table from "react-bootstrap/Table";

function Users() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => {
        response.json().then((result) => {
          console.warn(result);
          setData(result);
          localStorage.setItem("users", JSON.stringify(result));
        });
      })
      .catch((err) => {
        let collection = localStorage.getItem("users");
        setData(JSON.parse(collection));
        setMode("offline");
        // alert("You are offline")
      });
  }, []);

  return (
    <div className="users">
      <div>
        {mode === "offline" ? (
          <div class="alert alert-info" role="alert">
            You are in Offline mode.
          </div>
        ) : null}
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address.street}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
