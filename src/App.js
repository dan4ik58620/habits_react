import React, { Component } from "react";
import "./App.css";
import Auth from "./components/Auth/Auth";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";

class App extends Component {
  state = {
    users: [],
  };

  addNewUser = (user) => {
    this.setState((prevState) => ({ users: [...prevState.users, user] }));
  };
  render() {
    return (
      <>
        <Auth />
        <SignIn />
        <SignUp fixick={this.addNewUser} />
      </>
    );
  }
}

export default App;
