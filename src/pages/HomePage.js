import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UserListComponent from "../components/UserListComponent";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: uuidv4(),
          name: "caner",
          surname: "gecgel",
          username: "canergecgel",
        },
        {
          id: uuidv4(),
          name: "cem",
          surname: "gecgel",
          username: "cemgecgel",
        },
        {
          id: uuidv4(),
          name: "onur",
          surname: "gecgel",
          username: "onurgecgel",
        },
        {
          id: uuidv4(),
          name: "mert",
          surname: "gecgel",
          username: "mertgecgel",
        },
      ],
    };
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  addUser = (name, surname, username) => {
    if ((name, surname, username)) {
      const users = [...this.state.users];
      users.push({
        id: uuidv4(),
        name: name,
        surname: surname,
        username: username,
      });
      this.setState({ users });
      toast(` ${name} kullanıcı eklendi`);
    } else {
      alert("Please fill all fields");
    }
  };

  deleteUser = (obj) => {
    const users = this.state.users.filter((user) => {
      return user.id !== obj.id;
    });
    this.setState({ users });
    toast(` ${obj.name} kullanıcı silindi`);
  };

  editUser = (id, name, surname, username) => {
    if ((id, name, surname, username)) {
      const users = [...this.state.users];
      let updatedUsers = users.map((user) => {
        if (user.id === id) {
          user = {
            id: id,
            name: name,
            surname: surname,
            username: username,
          };
        }
        return user;
      });
      this.setState({
        users: updatedUsers,
      });
    }
  };

  render() {
    return (
      <div>
        <ToastContainer />
        <Navbar color="light" expand="md" light>
          <div className="container">
            <NavbarBrand href="/">react-intro</NavbarBrand>
          </div>
        </Navbar>
        <UserListComponent
          users={this.state.users}
          addUser={this.addUser}
          deleteUser={this.deleteUser}
          editUser={this.editUser}
        />
      </div>
    );
  }
}

export default HomePage;
