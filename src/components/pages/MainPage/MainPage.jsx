import React, { Component, useState } from "react";
import { Link, Outlet, Route } from "react-router-dom";
import "./mainPage.css";
import mainRoutes from "../../../routes/mainRoutes";
import items from "../../../components/Tabs/items.json";
const MainPage = () => {
  const [active, setActive] = useState(null);
  const openTab = e => setActive(+e.target.dataset.index);
  console.log("items:", items);
  console.log("mainRoutes:", mainRoutes);
  return (
    <>
      <nav>
        <ul className="main">
          <li className="tab">
            {/* {items.map(item => (
              <Link {...item} key={item.path} />
            ))} */}
            <Link to="/" className="tabLinks">
              Home
            </Link>
          </li>
          <li className="tab">
            <Link to="/about" className="tabLinks">
              About
            </Link>
          </li>

          <li className="tab">
            <Link to="/currency" className="tabLinks">
              Currency
            </Link>
          </li>

          <li className="tab">
            <Link to="/buttons" className="tabLinks">
              Buttons
            </Link>
          </li>

          <li className="tab">
            <Link to="*" className="tabLinks">
              NoPage
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default MainPage;
