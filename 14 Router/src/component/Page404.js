import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h1>Page Not found 404..</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        reprehenderit?
      </p>
      <Link to="/">Go to home page</Link>
    </div>
  );
};

export default Page404;
