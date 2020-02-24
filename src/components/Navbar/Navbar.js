import React, { Component } from "react";
import NavSearch from "../Search/NavSearch";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    const { history, match } = this.props;
    return (
      <div className="Navbar">
        <div className="Navbar-Container">
          <div className="Nav">
            <h1 className="Logo">
              <Link to="/">Splash</Link>
            </h1>
            <div className="Search">
              <NavSearch history={history} match={match} />
            </div>
          </div>

          <ul className="Navbar-Links">
            <li>
              <Link to="/collections">Collections</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Button variant="outline-secondary">Submit a photo</Button>
            </li>
            <li>
              <Button variant="secondary">Login</Button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
