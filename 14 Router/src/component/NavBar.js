import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink className="nav-link" style={{ color: "red" }} to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            // state={({ isActive }) => {
            //   return { backgroundColor: isActive ? "pink" : "red" };
            // }}
            className="nav-link"
            to="/about"
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink className="nav-link" to="/user/amit">
            Amit
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/filter">
            Filter
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
