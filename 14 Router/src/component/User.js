import React from "react";
import { useParams, useLocation } from "react-router-dom";
const User = () => {
  const location = useLocation();
  console.log(location);
  const params = useParams();
  const { name } = params;
  return (
    <div>
      <h1>this is {name} page</h1>
    </div>
  );
};

export default User;
