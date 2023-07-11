import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UserListComponent from "../components/UserListComponent";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "caner",
          surname: "gecgel",
          username: "canergecgel",
        },
        {
          id: 1,
          name: "cem",
          surname: "gecgel",
          username: "cemgecgel",
        },
        {
          id: 3,
          name: "onur",
          surname: "gecgel",
          username: "onurgecgel",
        },
        {
          id: 4,
          name: "mert",
          surname: "gecgel",
          username: "mertgecgel",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <div className="container">
            <NavbarBrand href="/">react-intro</NavbarBrand>
          </div>
        </Navbar>
        <UserListComponent users={this.state.users} />
      </div>
    );
  }
}

export default HomePage;
