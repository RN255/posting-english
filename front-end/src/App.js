import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SampleAd from "./components/SampleAd";

const API_BASE = "http://localhost:3001";

function App() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    GetEntries();

    console.log("This is entries:" + entries + "here.?");
  }, []);

  const GetEntries = () => {
    fetch(API_BASE + "/entries")
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.error(err));
  };

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        {entries.length > 0 &&
          entries.map((entry) => (
            <Route
              key={entry._id}
              path={`/Individual-${entry._id}`}
              element={<SampleAd text={entry.text} />}
            />
          ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
