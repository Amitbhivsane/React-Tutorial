import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact pages</h1>
      <h2>company info</h2>

      <Link to="company">company</Link>

      <Link to="channel">channel</Link>

      <Link to="other">other</Link>
      <Outlet></Outlet>
    </div>
  );
};

export default Contact;
