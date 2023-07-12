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

  render() {
    return (
      <div>
        <ToastContainer />
        <Navbar color="light" expand="md" light>
          <div className="container">
            <NavbarBrand href="/">react-intro</NavbarBrand>
          </div>
        </Navbar>
        <UserListComponent users={this.state.users} addUser={this.addUser} />
      </div>
    );
  }
}

export default HomePage;
