import React from "react";
import News1 from "./News1";
import News2 from "./News2";
import News3 from "./News3";
import { Link, Routes, Route } from "react-router-dom";

const News = () => {
  return (
    <div>
      <h1>new pages</h1>
      <ul>
        <li>
          <Link to="/news">news</Link>
        </li>
        <li>
          <Link to="/news/news1">news1</Link>
        </li>
        <li>
          <Link to="/news/news2">news2</Link>
        </li>
      </ul>
      {/* <Routes>
        <Route path="/news" element={<News />}>
          <Route path="/news1" element={<News1 />} />
          <Route path="/news2" element={<News2 />} />
        </Route>
      </Routes> */}

      {/* <Route path="/news" element={<News />} />
        <Route path="/news/news1" element={<News1 />} />
        <Route path="/news/news2" element={<News2 />} /> */}
    </div>
  );
};

export default News;
