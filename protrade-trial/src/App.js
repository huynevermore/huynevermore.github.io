import "./App.css";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Login from "./pages/Login/Login.js";
import HomePage from "./pages/HomePage/HomePage";

function App() {
const token = localStorage.getItem("auth") || null;

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/homepage");
    } else {
      navigate('/')
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
