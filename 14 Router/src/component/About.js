import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>

      <Link to="/user/mokshu" state={{ name: "amit puja" }}>
        Mokshu
      </Link>
      <br></br>
      <Link to="/user/puja">Puja</Link>
    </div>
  );
};

export default About;
