import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
}

export default App;
