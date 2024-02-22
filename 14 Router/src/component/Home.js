import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // const navtopage = () => {
  //   let x = false;
  //   if (x) {
  //     navigate("/about");
  //   } else {
  //     navigate("/filter");
  //   }
  // };
  const navtopage = (url) => {
    navigate(url);
  };
  return (
    <div>
      <h1>Home Page</h1>
      {/* <button onClick={() => navtopage()}>go to about page</button> */}
      {/* <br /> */}
      {/* <button onClick={() => navtopage()}>go to filter page</button> */}

      <button onClick={() => navtopage("/about")}>go to about page</button>
      <br />
      <button onClick={() => navtopage("/filter")}>go to filter page</button>
      <hr />
      <hr />
    </div>
  );
};

export default Home;
