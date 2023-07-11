import React, { Component } from "react";
import { Table } from "reactstrap";

export default class UserListComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mt-5">
        <button className="btn btn-primary">Add</button>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th> 
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user) => (
              <tr>
                <th scope="row"> {user.id} </th>
                <td> {user.name} </td>
                <td> {user.surname} </td>
                <td> {user.username} </td>
                <td>
                  <button className="btn btn-warning">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
