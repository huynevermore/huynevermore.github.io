import Home  from "./pages/Home";
import News  from "./pages/News"
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/News">News</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/News" element={<News/>} />
      </Routes>
    </div>
  );
}

export default App;
