import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import NavBar from "./component/NavBar";
import Page404 from "./component/Page404";
import User from "./component/User";
import Filter from "./component/Filter";
import Contact from "./component/Contact";
import Company from "./component/Company";
import Channel from "./component/Channel";
import Other from "./component/Other";
import Login from "./component/Login";
import Protected from "./component/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/About" element={<Protected Component={About} />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/user/:name" element={<Protected Component={About} />} />
          <Route path="/filter" element={<Protected Component={Filter} />} />
          <Route path="/contact/" element={<Protected Component={Contact} />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
