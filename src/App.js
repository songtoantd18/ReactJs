import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Todolist from "./components/TodoList/TodoList";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import News1 from "./pages/News1";
import News2 from "./pages/News2";
// import News3 from "./pages/News3";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/news">news</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />}>
          <Route path="news1" element={<News1 />} />
          <Route path="news2" element={<News2 />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/news" element={<News />} />
        <Route path="/news/news1" element={<News1 />} />
        <Route path="/news/news2" element={<News2 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
