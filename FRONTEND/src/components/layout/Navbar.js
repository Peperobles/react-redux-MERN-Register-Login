import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <Link to="/">
          <i className="material-icons">home</i>
        </Link>
      </nav>
    );
  }
}
export default Navbar;
