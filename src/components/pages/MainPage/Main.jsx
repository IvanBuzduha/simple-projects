import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
class MainPage extends Component {
  state = {};
  render() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="*">NoPage</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </>
    );
  }
}
export default MainPage;
