import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./mainPage.css";

const MainPage = () => {
  return (
    <>
      <nav>
        <ul className="navBar">
          <li className="tab">
            {/* {items.map(item => (
              <Link {...item} key={item.path} />
            ))} */}
            <Link to="/" className="tabLinks">
              Home
            </Link>
          </li>
          {/* <li className="tab">
            <Link to="/about" className="tabLinks">
              About
            </Link>
          </li> */}

          <li className="tab">
            <Link to="/quiz" className="tabLinks">
              Quiz
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
            <Link to="/timer" className="tabLinks">
              Timer
            </Link>
          </li>

          <li className="tab">
            <Link to="todo" className="tabLinks">
              ToDo
            </Link>
          </li>

          <li className="tab">
            <Link to="calc" className="tabLinks">
              Calc
            </Link>
          </li>

          <li className="tab">
            <Link to="slider" className="tabLinks">
              Swiper
            </Link>
          </li>

          <li className="tab">
            <Link to="waterWave" className="tabLinks">
              Water Wave
            </Link>
          </li>

          {/* <li className="tab">
            <Link to="*" className="tabLinks">
              NoPage
            </Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default MainPage;
