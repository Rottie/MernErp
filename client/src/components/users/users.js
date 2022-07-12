import React, { Component } from "react";
import "./Users.scss";
import axios from "axios";
import io from "socket.io-client";

import Read from "./Read/Read";
import Edit from "./Edit/Edit";

import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

class users extends Component {
  constructor() {
    super();

    this.server = process.env.REACT_APP_API_URL || "";
    this.socket = io.connect(this.server);

    this.state = {
      users: [],
      online: 0,
    };

    this.fetchUsers = this.fetchUsers.bind(this);
    this.handleUserAdded = this.handleUserAdded.bind(this);
    this.handleUserUpdated = this.handleUserUpdated.bind(this);
    this.handleUserDeleted = this.handleUserDeleted.bind(this);
  }

  // Place socket.io code inside here
  componentDidMount() {
    this.fetchUsers();
    this.socket.on("visitor enters", (data) => this.setState({ online: data }));
    this.socket.on("visitor exits", (data) => this.setState({ online: data }));
    this.socket.on("add", (data) => this.handleUserAdded(data));
    this.socket.on("update", (data) => this.handleUserUpdated(data));
    this.socket.on("delete", (data) => this.handleUserDeleted(data));
  }

  // Fetch data from the back-end
  fetchUsers() {
    axios
      .get(`${this.server}/api/users/`)
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleUserAdded(user) {
    let users = this.state.users.slice();
    users.push(user);
    this.setState({ users: users });
  }

  handleUserUpdated(user) {
    let users = this.state.users.slice();

    let i = users.findIndex((u) => u._id === user._id);

    if (users.length > i) {
      users[i] = user;
    }

    this.setState({ users: users });
  }

  handleUserDeleted(user) {
    let users = this.state.users.slice();
    users = users.filter((u) => {
      return u._id !== user._id;
    });
    this.setState({ users: users });
  }

  render() {
    return (
      <div className="list">
        <Sidebar />
        <div class="userContainer">
          <Navbar />

          <div class="user">
            <Edit
              headerTitle="Add User"
              buttonTriggerTitle="Add New"
              buttonSubmitTitle="Add"
              buttonColor="green"
              onUserAdded={this.handleUserAdded}
              server={this.server}
              socket={this.socket}
            />
            <Read
              onUserUpdated={this.handleUserUpdated}
              onUserDeleted={this.handleUserDeleted}
              users={this.state.users}
              server={this.server}
              socket={this.socket}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default users;
