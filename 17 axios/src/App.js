import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setisError] = useState([]);

  //using promis
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data))
  //     .catch((error) => setisError(error.message));
  // }, []);

  // using Async await

  const getApiData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    } catch (error) {
      setisError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div>
      <h1>Axios Tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData.map((post) => {
          const { id, title, body } = post;
          return (
            <div className="cart" key={id}>
              <h1>{id}</h1>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
