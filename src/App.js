import React from "react";
import Menu from "./components/Menu";
import '/home/user/my-app/src/styles/style.css';
import PageReact from "./components/pageReact";
import PageJS from "./components/pageJS";
import PageCSS from "./components/pageCSS";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


export default function App() {
  return (
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route exact path="/react">
              <PageReact />
            </Route>
            <Route exact path="/javascript">
              <PageJS />
            </Route>
            <Route exact path="/css">
              <PageCSS />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

