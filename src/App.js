import React from "react";
import Menu from "./components/Menu";
import '/home/user/my-app/src/styles/style.css';
import PageReact from "./components/pageReact";
import PageJS from "./components/pageJS";
import PageCSS from "./components/pageCSS";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export default function App() {
  return (
      <Router>
        <div>
          <Menu />
          <Routes>
            <Route path="/react" element={<PageReact />} />
            <Route path="/javascript" element={<PageJS />} />
            <Route path="/css" element={<PageCSS />} />
          </Routes>
        </div>
      </Router>
  );
}

