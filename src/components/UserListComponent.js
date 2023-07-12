import React, { Component } from "react";
import { Table, Alert } from "reactstrap";
import FormComponent from "./FormComponent";

export default class UserListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.hide = this.hide.bind(this);
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div className="container mt-5">
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ visible: true })}
        >
          Add
        </button>

        <FormComponent
          visible={this.state.visible}
          hide={this.hide}
          addUser={this.props.addUser}
        />

        {this.props.users.length > 0 ? (
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
                <tr key={user.id}>
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
        ) : (
          <Alert className="mt-5" color="warning">
            There is no user
          </Alert>
        )}
      </div>
    );
  }
}
